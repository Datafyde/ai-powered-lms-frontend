"use client";
import React, { useEffect, useState } from "react";

type Props = {};

const Verification = (props: Props) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const [timer, setTimer] = useState(120); // 2 minutes in seconds
  const [canResend, setCanResend] = useState(false);

  // Countdown logic
  useEffect(() => {
    if (timer <= 0) {
      setCanResend(true);
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  };

  const handleResend = async () => {
    setTimer(120); // Reset countdown
    setCanResend(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-2 text-center">Verify OTP</h1>
        <p className="text-sm text-gray-600 text-center mb-4">
          Enter the 6-digit code sent to your email.
        </p>

        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="text"
            name="otp"
            maxLength={6}
            pattern="\d{6}"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full border px-3 py-2 rounded text-center tracking-widest text-lg"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>

        <div className="mt-4 text-center">
          {canResend ? (
            <button
              onClick={handleResend}
              className="text-blue-600 hover:underline text-sm"
            >
              Resend OTP
            </button>
          ) : (
            <p className="text-gray-500 text-sm">
              Resend available in {formatTime(timer)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verification;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreditCard,
  ArrowRight,
  Zap,
  Smartphone,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { ArrowUpDown, X } from "lucide-react";
import Header from "./Header";
import usdc from "/usdc.jpg";
import usdt from "/usdt.jpg";
import dai from "/dai.jpg";
import busd from "/busd.jpg";

// Utility function for email validation (moved outside component)
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Hero = () => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [hoveredCoin, setHoveredCoin] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false); // Get Started Modal
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false); // Waitlist Modal
  const [email, setEmail] = useState(""); // Email input for waitlist
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isValidEmailState, setIsValidEmailState] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const navigate = useNavigate();

  // Handle email input changes with real-time validation
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailError("");
    setSubmitSuccess(false);

    if (emailValue.trim()) {
      if (isValidEmail(emailValue)) {
        setIsValidEmailState(true);
        setEmailError("");
      } else {
        setIsValidEmailState(false);
        if (emailValue.includes("@")) {
          setEmailError("Please enter a valid email address");
        }
      }
    } else {
      setIsValidEmailState(false);
    }
  };

  // Handle waitlist submission
  const handleWaitlistSubmit = async () => {
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!isValidEmailState) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setEmailError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Email submitted:", email);
      setSubmitSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setIsWaitlistOpen(false);
        setEmail("");
        setSubmitSuccess(false);
        setIsLoading(false);
        setIsValidEmailState(false);
      }, 2000);
    } catch (error) {
      if (error instanceof Error) {
        setEmailError(error.message);
      }
      setEmailError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  const stablecoins = [
    { image: usdc, position: "top-20 left-20", delay: "0s" },
    { image: usdt, position: "top-40 right-16", delay: "1s" },
    {
      image: dai,
      position: "bottom-32 left-16",
      delay: "2s",
      size: "w-24 h-24",
    },
    {
      image: busd,
      position: "bottom-20 right-24",
      delay: "3s",
      size: "w-20 h-20",
    },
  ];

  return (
    <>
      <Header />
      <section className="relative min-h-screen bg-jet-black overflow-hidden flex items-center justify-center pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-jet-black via-graphite/20 to-jet-black"></div>

        {/* Floating stablecoins */}
        {stablecoins.map((coin) => (
          <div
            key={coin.image}
            className={`absolute ${
              coin.position
            } animate-drift transition-all duration-300 cursor-pointer ${
              hoveredCoin === coin.image
                ? "opacity-80 scale-125"
                : "opacity-30 hover:opacity-60"
            }`}
            style={{ animationDelay: coin.delay }}
            onMouseEnter={() => setHoveredCoin(coin.image)}
            onMouseLeave={() => setHoveredCoin(null)}
          >
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center bg-transparent ${
                hoveredCoin === coin.image
                  ? "shadow-2xl shadow-electric-teal/50"
                  : ""
              }`}
            >
              <img
                src={coin.image}
                alt={coin.image}
                className={`w-16 h-16 ${coin.size}`}
              />
            </div>
          </div>
        ))}

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-graphite/50 backdrop-blur-sm border border-electric-teal/20 mb-8">
                  <Zap className="w-4 h-4 text-electric-teal mr-2" />
                  <span className="text-sm text-text-muted">Now in Beta</span>
                </div>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
                <span className="bg-gradient-to-r from-neon-blue to-electric-teal bg-clip-text text-transparent">
                  Bankless,
                </span>
                <br />
                <span className="bg-gradient-to-r from-electric-teal to-neon-blue bg-clip-text text-transparent">
                  Borderless,
                </span>
                <br />
                and Always On.
              </h1>

              <p className="text-xl text-text-muted mb-8 leading-relaxed">
                Experience the future of digital payments with Pulse. Seamlessly
                manage stablecoins and spend anywhere with our innovative card
                solution.
              </p>

              {/* Mobile App Coming Soon */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-electric-teal/10 border border-electric-teal/20 mb-8">
                <Smartphone className="w-4 h-4 text-electric-teal mr-2" />
                <span className="text-sm text-electric-teal font-medium">
                  Mobile App Coming Soon
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* Get Started */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-neon-blue to-electric-teal text-text-primary font-semibold rounded-2xl hover:shadow-2xl hover:shadow-neon-blue/25 transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
                >
                  <span className="flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                {/* Join Waitlist */}
                <button
                  onClick={() => setIsWaitlistOpen(true)}
                  className="px-8 py-4 bg-graphite/50 backdrop-blur-sm border border-electric-teal/30 text-electric-teal font-semibold rounded-2xl hover:bg-graphite/70 hover:border-electric-teal/50 transition-all duration-300 transform hover:scale-105"
                >
                  Join Waitlist
                </button>
              </div>
            </div>

            {/* Right Content - 3D Card Mockup */}
            <div className="relative flex justify-center items-center">
              {/* Card flip logic */}
              <div
                className={`relative w-96 h-52 sm:h-56 rounded-2xl cursor-pointer transition-transform duration-700`}
                style={{
                  perspective: "1200px",
                  transformStyle: "preserve-3d",
                  transform: isCardFlipped
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)",
                }}
                onMouseEnter={() => setIsCardFlipped(true)}
                onMouseLeave={() => setIsCardFlipped(false)}
              >
                {/* Card Front */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden z-20"
                  style={{
                    backfaceVisibility: "hidden",
                    boxShadow:
                      "0 2px 28px 0 rgba(22, 168, 255, 0.14), 0 1.5px 0 0 #1C1C1C",
                    background:
                      "linear-gradient(120deg, #1C1C1C 60%, #0B0F12 100%)",
                    border: "1.5px solid #1cd7fa44",
                  }}
                >
                  <div className="relative p-6 h-full flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                      <span className="text-text-primary font-bold text-xl tracking-wide">
                        PULSE
                      </span>
                      <CreditCard className="w-8 h-8 text-electric-teal" />
                    </div>

                    <div className="w-14 h-8 bg-gradient-to-r from-electric-teal/30 to-neon-blue/30 rounded mb-2 mt-8"></div>

                    <div className="flex justify-between items-end text-xs">
                      <div>
                        <div className="text-text-muted mb-1">Card Holder</div>
                        <div className="text-text-primary font-semibold text-sm">
                          EMMY.PULSE
                        </div>
                      </div>
                      <div>
                        <div className="text-text-primary text-base font-mono">
                          •••• •••• •••• 1234
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-end mt-2 text-xs">
                      <div>
                        <div className="text-text-muted mb-1">Valid Thru</div>
                        <div className="text-text-primary text-sm">12/28</div>
                      </div>
                      <div className="text-right">
                        <div className="text-text-muted mb-1">Exp</div>
                        <div className="text-text-primary text-sm">12/28</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Back */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden z-10"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    boxShadow:
                      "0 2px 28px 0 rgba(44, 169, 255, 0.12), 0 1.5px 0 0 #1C1C1C",
                    background:
                      "linear-gradient(120deg, #0B0F12 60%, #1C1C1C 100%)",
                    border: "1.5px solid #3b82f620",
                  }}
                >
                  <div className="relative p-6 h-full flex flex-col justify-between">
                    <div className="h-10 bg-jet-black rounded mt-4 mb-6" />
                    <div className="bg-text-primary h-7 rounded mb-4 flex items-center px-3">
                      <span className="text-jet-black text-xs italic">
                        Emmy.pulse
                      </span>
                    </div>
                    <div className="flex justify-between items-end text-xs">
                      <div>
                        <div className="text-text-muted mb-1">CVV</div>
                        <div className="text-text-primary text-sm font-mono">
                          •••
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-text-muted">
                          For customer service call
                        </div>
                        <div className="text-text-primary text-xs">
                          1-800-PULSE-24
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get Started Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-jet-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-graphite/90 backdrop-blur-lg rounded-2xl border border-electric-teal/30 p-8 max-w-md w-full transform animate-in slide-in-from-bottom-5 duration-300 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-electric-teal to-neon-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowUpDown className="w-8 h-8 text-text-primary" />
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Quick Off-Ramp
                </h3>
                <p className="text-text-muted mb-8">
                  Convert your stablecoins to local currency instantly without
                  creating a wallet.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      navigate("/offramp");
                    }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-neon-blue to-electric-teal text-text-primary font-semibold rounded-xl hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Off-Ramp
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full px-6 py-3 text-text-muted hover:text-text-primary transition-colors duration-200"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Join Waitlist Modal */}
        {isWaitlistOpen && (
          <div className="fixed inset-0 bg-jet-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-graphite/90 backdrop-blur-lg rounded-2xl border border-electric-teal/30 p-8 max-w-md w-full transform animate-in slide-in-from-bottom-5 duration-300 relative">
              <button
                onClick={() => {
                  setIsWaitlistOpen(false);
                  setEmail("");
                  setEmailError("");
                  setSubmitSuccess(false);
                  setIsValidEmailState(false);
                }}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center">
                {submitSuccess ? (
                  <>
                    <div className="w-16 h-16 bg-gradient-to-r from-electric-teal to-neon-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-4">
                      You're In!
                    </h3>
                    <p className="text-text-muted">
                      Thanks for joining our waitlist. We'll notify you when we
                      launch.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-text-primary mb-4">
                      Join Waitlist
                    </h3>
                    <p className="text-text-muted mb-6">
                      Enter your email to be the first to know when we launch.
                    </p>

                    <div className="mb-4">
                      <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        className={`w-full px-4 py-3 rounded-xl bg-jet-black text-text-primary border ${
                          emailError
                            ? "border-red-500 focus:ring-red-500"
                            : isValidEmailState
                            ? "border-electric-teal focus:ring-electric-teal"
                            : "border-electric-teal/30 focus:ring-electric-teal"
                        } focus:outline-none focus:ring-2 transition-colors`}
                        disabled={isLoading}
                      />
                      {emailError && (
                        <p className="text-red-400 text-sm mt-2 text-left">
                          {emailError}
                        </p>
                      )}
                      {/* {isValidEmailState && !emailError && (
                        <p className="text-electric-teal text-sm mt-2 text-left">Email looks good!</p>
                      )} */}
                    </div>

                    <button
                      onClick={handleWaitlistSubmit}
                      disabled={isLoading || !email.trim()}
                      className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-electric-teal text-text-primary font-semibold rounded-xl hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        "Join Waitlist"
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Hero;

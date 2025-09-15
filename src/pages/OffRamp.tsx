import { useState } from 'react';
import {
  ArrowUpRight,
  ChevronDown,
  Calculator,
  CreditCard,
  Copy,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import BankSelectModal from '../components/modals/BankSelectModal';

export default function OffRamp() {
  const [selectedToken, setSelectedToken] = useState('');
  const [selectedChain, setSelectedChain] = useState('');
  const [amount, setAmount] = useState('');
  const [ngnAccount, setNgnAccount] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [isBankModalOpen, setIsBankModalOpen] = useState(false);
  const [error, setError] = useState('');
  const [showTransferInfo, setShowTransferInfo] = useState(false);
  const [copied, setCopied] = useState(false);

  const tokens = [
    { id: 'usdt', name: 'Tether', symbol: 'USDT' },
    { id: 'usdc', name: 'USD Coin', symbol: 'USDC' },
  ];

  const chains = [
    { id: 'ethereum', name: 'Ethereum' },
    { id: 'polygon', name: 'Polygon' },
    { id: 'bsc', name: 'BSC' },
    { id: 'arbitrum', name: 'Arbitrum' },
    { id: 'solana', name: 'Solana' },
  ];

  const walletAddress = 'GLBPTj7AGX1BXpJ...H2jL6DpycYv5aLf';

  const allFieldsFilled =
    selectedToken &&
    selectedChain &&
    amount &&
    ngnAccount &&
    selectedBank &&
    !error;

  const handleExecuteClick = () => {
    if (!showTransferInfo) {
      // First click → show wallet address
      setShowTransferInfo(true);
    } else {
      // Second click → confirm transfer
      alert('Meant to navigate user to status page');
      setShowTransferInfo(false);
      setSelectedToken('');
      setSelectedChain('');
      setAmount('');
      setNgnAccount('');
      setSelectedBank('');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-50 bg-jet-black/80 backdrop-blur-lg border-b border-graphite/30'>
        <div className='container mx-auto px-6 py-4 flex items-center'>
          <Link to='/' className='flex items-center space-x-3'>
            <div className='w-8 h-8 bg-gradient-to-r from-neon-blue to-electric-teal rounded-lg flex items-center justify-center'>
              <CreditCard className='w-5 h-5 text-text-primary' />
            </div>
            <span className='text-2xl font-bold text-text-primary'>PULSE</span>
          </Link>
        </div>
      </header>

      <section className='relative min-h-screen bg-jet-black flex items-center justify-center pt-20'>
        {/* Background */}
        <div className='absolute inset-0 bg-gradient-to-br from-jet-black via-[rgba(28,28,28,0.2)] to-jet-black pointer-events-none ' />

        {/* Card */}
        <div className='relative z-10 max-w-lg w-full mx-auto rounded-2xl shadow-xl md:border md:border-electric-teal/30 bg-gradient-to-br from-graphite/90 via-graphite to-jet-black/90'>
          <div className='p-6 pb-4'>
            <h2 className='text-xl font-bold text-white mb-1'>Crypto to NGN</h2>
            <p className='text-base text-gray-300'>
              Convert crypto to NGN instantly straight to your bank.
            </p>
          </div>

          <div className='px-6 pb-6'>
            <div className='space-y-5'>
              {/* Token */}
              <div className='relative'>
                <label className='block text-sm font-medium text-gray-200 mb-2'>
                  Token
                </label>
                <div className='relative'>
                  <select
                    className='w-full bg-[#16191b] border border-graphite rounded-xl p-4 text-white text-base appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                    value={selectedToken}
                    onChange={(e) => setSelectedToken(e.target.value)}
                  >
                    <option value=''>Select Token</option>
                    {tokens.map((token) => (
                      <option key={token.id} value={token.id}>
                        {token.name} ({token.symbol})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400 pointer-events-none' />
                </div>
              </div>

              {/* Chain */}
              <div className='relative'>
                <label className='block text-sm font-medium text-gray-200 mb-2'>
                  Chain
                </label>
                <div className='relative'>
                  <select
                    className='w-full bg-[#16191b] border border-graphite rounded-xl p-4 text-white text-base appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                    value={selectedChain}
                    onChange={(e) => setSelectedChain(e.target.value)}
                  >
                    <option value=''>Select Chain</option>
                    {chains.map((chain) => (
                      <option key={chain.id} value={chain.id}>
                        {chain.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400 pointer-events-none' />
                </div>
              </div>

              {/* Amount */}
              <div>
                <label className='block text-sm font-medium text-gray-200 mb-2'>
                  Amount
                </label>
                <input
                  type='number'
                  className='w-full bg-[#16191b] border border-graphite rounded-xl p-4 text-white text-base focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition
                    [&::-webkit-outer-spin-button]:appearance-none
                    [&::-webkit-inner-spin-button]:appearance-none
                    [appearance:textfield]'
                  value={amount}
                  onChange={(e) => {
                    const value = e.target.value;
                    setAmount(value);

                    if (value && parseFloat(value) < 1) {
                      setError('Amount must be 1 or above');
                    } else {
                      setError('');
                    }
                  }}
                  placeholder='Enter amount'
                  min='1'
                />
                {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
              </div>

              {/* Bank Selector */}
              <div>
                <label className='block text-sm font-medium text-gray-200 mb-2'>
                  NGN Account
                </label>
                <div className='flex gap-2'>
                  <button
                    onClick={() => setIsBankModalOpen(true)}
                    className='text-start text-base w-[40%] md:w-1/3 bg-[#16191b] border border-graphite rounded-xl p-4 text-white'
                  >
                    {selectedBank || 'Select Bank'}
                  </button>

                  <BankSelectModal
                    isOpen={isBankModalOpen}
                    onClose={() => setIsBankModalOpen(false)}
                    onSelect={(bank: string) => setSelectedBank(bank)}
                  />

                  <input
                    type='text'
                    className='flex-1 bg-[#16191b] border border-graphite rounded-xl p-4 text-white text-base focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition w-[60%] md:w-full'
                    value={ngnAccount}
                    onChange={(e) =>
                      setNgnAccount(
                        e.target.value.replace(/\D/g, '').slice(0, 10)
                      )
                    }
                    placeholder='1234567890'
                    maxLength={10}
                  />
                </div>
              </div>

              {/* Conversion Preview */}
              {selectedToken && amount && parseFloat(amount) > 0 && (
                <div className='bg-[#16191b] border border-blue-700 rounded-xl p-4 shadow flex flex-col gap-1'>
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-400 text-sm'>
                      You'll receive
                    </span>
                    <Calculator className='w-4 h-4 text-blue-400' />
                  </div>
                  <div className='text-white text-xl font-semibold mt-1'>
                    ≈ ₦{(parseFloat(amount) * 1650).toLocaleString()} NGN
                  </div>
                  <div className='text-gray-400 text-sm'>
                    Rate: 1{' '}
                    {tokens.find((t) => t.id === selectedToken)?.symbol ||
                      selectedToken}{' '}
                    = ₦1,650
                  </div>
                </div>
              )}

              {/* Transfer Instructions */}
              {showTransferInfo && (
                <div className='bg-[#16191b] border border-blue-700 rounded-xl p-4 shadow mb-4'>
                  <p className='text-white text-sm mb-2'>
                    Transfer{' '}
                    <span className='font-semibold'>
                      {amount} {selectedToken.toUpperCase()}
                    </span>{' '}
                    on <span className='font-semibold'>{selectedChain}</span>{' '}
                    to:
                  </p>
                  <div className='flex items-center justify-between bg-[#0f1113] px-3 py-2 rounded-lg border border-gray-600'>
                    <span className='text-gray-300 text-sm truncate'>
                      {walletAddress}
                    </span>
                    <button
                      onClick={handleCopy}
                      className='ml-2 text-blue-400 hover:text-blue-300'
                    >
                      <Copy size={18} />
                    </button>
                  </div>
                  {copied && (
                    <p className='text-green-400 text-xs mt-1'>Copied!</p>
                  )}
                  <p className='text-red-400 text-xs mt-2'>
                    ⚠️ Only send tokens on{' '}
                    <span className='font-semibold'>{selectedChain}</span> to
                    this address.
                  </p>
                </div>
              )}

              {/* Execute Button */}
              <button
                className={`w-full ${
                  allFieldsFilled
                    ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                    : 'bg-gray-600 cursor-not-allowed'
                } disabled:opacity-50 flex items-center justify-center gap-2 p-4 rounded-xl text-white text-base font-semibold mt-2 transition-all`}
                onClick={handleExecuteClick}
                disabled={!allFieldsFilled}
                type='button'
              >
                <ArrowUpRight size={20} />
                <span>
                  {showTransferInfo
                    ? 'I have made the transfer'
                    : 'Execute Off-Ramp'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

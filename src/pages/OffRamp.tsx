import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Calculator } from 'lucide-react';

export default function OffRamp() {
  const [selectedToken, setSelectedToken] = useState('');
  const [selectedChain, setSelectedChain] = useState('');
  const [amount, setAmount] = useState('');
  const [ngnAccount, setNgnAccount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const tokens = [
    { id: 'usdt', name: 'Tether', symbol: 'USDT' },
    { id: 'usdc', name: 'USD Coin', symbol: 'USDC' },
  ];

  const chains = [
    { id: 'ethereum', name: 'Ethereum' },
    { id: 'polygon', name: 'Polygon' },
    { id: 'bsc', name: 'BSC' },
    { id: 'arbitrum', name: 'Arbitrum' },
  ];

  const handleManualOffRamp = async () => {
    if (!selectedToken || !selectedChain || !amount || !ngnAccount) {
      alert('Please fill in all fields');
      return;
    }

    setIsProcessing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert('Off-ramp completed successfully');
      setSelectedToken('');
      setSelectedChain('');
      setAmount('');
      setNgnAccount('');
    } catch (error) {
      alert('Off-ramp failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className='relative min-h-screen bg-jet-black flex items-center justify-center pt-20'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-jet-black via-[rgba(28,28,28,0.2)] to-jet-black pointer-events-none ' />
      {/* Card */}
      <div className='relative z-10 max-w-md w-full mx-auto rounded-2xl shadow-xl border border-electric-teal/30 bg-gradient-to-br from-graphite/90 via-graphite to-jet-black/90'>
        <div className='p-6 pb-4'>
          <h2 className='text-xl font-bold text-white mb-1'>Crypto to NGN</h2>
          <p className='text-base text-gray-300'>
            Convert crypto to NGN instantly straight to your bank.
          </p>
        </div>
        <div className='px-6 pb-6'>
          <div className='space-y-5'>
            <div className='relative'>
              <label className='block text-sm font-medium text-gray-200 mb-2'>
                Token
              </label>
              <div className='relative'>
                <select
                  className='w-full bg-[#16191b] border border-graphite rounded-xl p-4 text-white text-base appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                  value={selectedToken}
                  onChange={(e) => setSelectedToken(e.target.value)}
                  disabled={isProcessing}
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

            <div className='relative'>
              <label className='block text-sm font-medium text-gray-200 mb-2'>
                Chain
              </label>
              <div className='relative'>
                <select
                  className='w-full bg-[#16191b] border border-graphite rounded-xl p-4 text-white text-base appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                  value={selectedChain}
                  onChange={(e) => setSelectedChain(e.target.value)}
                  disabled={isProcessing}
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

            <div>
              <label className='block text-sm font-medium text-gray-200 mb-2'>
                Amount
              </label>
              <input
                type='number'
                className='w-full bg-[#16191b] border border-graphite rounded-xl p-4 text-white text-base focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder='0.00'
                step='0.01'
                min='0'
                disabled={isProcessing}
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-200 mb-2'>
                NGN Account Number
              </label>
              <input
                type='text'
                className='w-full bg-[#16191b] border border-graphite rounded-xl p-4 text-white text-base focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition'
                value={ngnAccount}
                onChange={(e) =>
                  setNgnAccount(e.target.value.replace(/\D/g, '').slice(0, 10))
                }
                placeholder='1234567890'
                maxLength={10}
                disabled={isProcessing}
              />
            </div>

            {selectedToken && amount && parseFloat(amount) > 0 && (
              <div className='bg-[#16191b] border border-blue-700 rounded-xl p-4 shadow flex flex-col gap-1'>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-400 text-sm'>You'll receive</span>
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

            <button
              className={`w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 p-4 rounded-xl text-white text-base font-semibold mt-2 transition-all ${
                isProcessing ? 'cursor-not-allowed' : ''
              }`}
              onClick={handleManualOffRamp}
              disabled={isProcessing}
              type='button'
            >
              <ArrowUpRight size={20} />
              <span>{isProcessing ? 'Processing...' : 'Execute Off-Ramp'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

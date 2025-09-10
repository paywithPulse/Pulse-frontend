import { useState } from 'react';
import {
  ArrowUpRight,
  CreditCard,
  Smartphone,
  ChevronDown,
  Calculator,
} from 'lucide-react';

export default function OffRamp() {
  const [activeMethod, setActiveMethod] = useState('manual');
  const [selectedToken, setSelectedToken] = useState('');
  const [selectedChain, setSelectedChain] = useState('');
  const [amount, setAmount] = useState('');
  const [ngnAccount, setNgnAccount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock data - replace with your actual data
  const tokens = [
    { id: 'usdt', name: 'Tether', symbol: 'USDT' },
    { id: 'usdc', name: 'USD Coin', symbol: 'USDC' },
    { id: 'eth', name: 'Ethereum', symbol: 'ETH' },
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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert('Off-ramp completed successfully');
      // Reset form
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

  const TokenSelector = ({ selectedToken, onSelect }) => (
    <div className='relative'>
      <label className='block text-sm font-medium text-white mb-2'>Token</label>
      <div className='relative'>
        <select
          className='w-full bg-gray-800 border border-gray-600 rounded-xl p-4 text-white text-base appearance-none cursor-pointer focus:outline-none focus:border-blue-500'
          value={selectedToken}
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value=''>Select Token</option>
          {tokens.map((token) => (
            <option key={token.id} value={token.id}>
              {token.name} ({token.symbol})
            </option>
          ))}
        </select>
        <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none' />
      </div>
    </div>
  );

  const ChainSelector = ({ selectedChain, onSelect }) => (
    <div className='relative'>
      <label className='block text-sm font-medium text-white mb-2'>Chain</label>
      <div className='relative'>
        <select
          className='w-full bg-gray-800 border border-gray-600 rounded-xl p-4 text-white text-base appearance-none cursor-pointer focus:outline-none focus:border-blue-500'
          value={selectedChain}
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value=''>Select Chain</option>
          {chains.map((chain) => (
            <option key={chain.id} value={chain.id}>
              {chain.name}
            </option>
          ))}
        </select>
        <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none' />
      </div>
    </div>
  );

  const ConversionDisplay = ({ token, amount }) => {
    const selectedTokenData = tokens.find((t) => t.id === token);
    const convertedAmount = amount * 1650; // Mock exchange rate

    return (
      <div className='bg-gray-800 border border-gray-600 rounded-xl p-4'>
        <div className='flex items-center justify-between'>
          <span className='text-gray-400 text-sm'>You'll receive</span>
          <Calculator className='w-4 h-4 text-gray-400' />
        </div>
        <div className='text-white text-xl font-semibold mt-1'>
          ≈ ₦{convertedAmount.toLocaleString()} NGN
        </div>
        <div className='text-gray-400 text-sm mt-1'>
          Rate: 1 {selectedTokenData?.symbol || token} = ₦1,650
        </div>
      </div>
    );
  };

  const renderManualOffRamp = () => (
    <div className='px-6'>
      <h2 className='text-xl font-semibold text-white mb-2'>Manual Off-Ramp</h2>
      <p className='text-sm text-gray-400 mb-6'>
        Convert your crypto to NGN directly to your bank account
      </p>

      <div className='space-y-5'>
        <TokenSelector
          selectedToken={selectedToken}
          onSelect={setSelectedToken}
        />

        <ChainSelector
          selectedChain={selectedChain}
          onSelect={setSelectedChain}
        />

        <div>
          <label className='block text-sm font-medium text-white mb-2'>
            Amount
          </label>
          <input
            type='number'
            className='w-full bg-gray-800 border border-gray-600 rounded-xl p-4 text-white text-base focus:outline-none focus:border-blue-500 placeholder-gray-500'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='0.00'
            step='0.01'
            min='0'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-white mb-2'>
            NGN Account Number
          </label>
          <input
            type='text'
            className='w-full bg-gray-800 border border-gray-600 rounded-xl p-4 text-white text-base focus:outline-none focus:border-blue-500 placeholder-gray-500'
            value={ngnAccount}
            onChange={(e) =>
              setNgnAccount(e.target.value.replace(/\D/g, '').slice(0, 10))
            }
            placeholder='1234567890'
            maxLength={10}
          />
        </div>

        {selectedToken && amount && parseFloat(amount) > 0 && (
          <ConversionDisplay
            token={selectedToken}
            amount={parseFloat(amount)}
          />
        )}

        <button
          className={`w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 p-4 rounded-xl text-white text-base font-semibold mt-2 transition-colors ${
            isProcessing ? 'cursor-not-allowed' : ''
          }`}
          onClick={handleManualOffRamp}
          disabled={isProcessing}
        >
          <ArrowUpRight size={20} />
          <span>{isProcessing ? 'Processing...' : 'Execute Off-Ramp'}</span>
        </button>
      </div>
    </div>
  );

  const renderCardOffRamp = () => (
    <div className='px-6'>
      <h2 className='text-xl font-semibold text-white mb-2'>
        APM Card Off-Ramp
      </h2>
      <p className='text-sm text-gray-400 mb-6'>
        Use your APM card at any ATM or POS terminal
      </p>

      <div className='space-y-4'>
        {[
          'Insert your APM card at ATM or POS',
          'Enter your 4-digit PIN',
          'System automatically selects best token/chain',
          'PIN signs transaction, fiat is released',
        ].map((step, index) => (
          <div key={index} className='flex items-center gap-4'>
            <div className='w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0'>
              <span className='text-gray-900 text-sm font-bold'>
                {index + 1}
              </span>
            </div>
            <p className='text-white text-sm flex-1'>{step}</p>
          </div>
        ))}
      </div>

      <div className='bg-gray-800 border border-cyan-400 rounded-xl p-4 mt-6'>
        <p className='text-cyan-400 text-sm'>
          💡 The system will automatically aggregate funds from multiple chains
          if needed
        </p>
      </div>
    </div>
  );

  return (
    <div className='min-h-screen bg-gray-900'>
      <div className='max-w-md mx-auto bg-gray-900'>
        {/* Header */}
        <div className='p-6 pb-4'>
          <h1 className='text-3xl font-bold text-white mb-1'>Spend</h1>
          <p className='text-base text-gray-400'>
            Off-ramp your crypto to fiat
          </p>
        </div>

        {/* Method Toggle */}
        <div className='mx-6 mb-6 bg-gray-800 rounded-xl p-1 flex'>
          <button
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-colors ${
              activeMethod === 'manual'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveMethod('manual')}
          >
            <Smartphone size={16} />
            <span>Manual</span>
          </button>

          <button
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-colors ${
              activeMethod === 'card'
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => setActiveMethod('card')}
          >
            <CreditCard size={16} />
            <span>APM Card</span>
          </button>
        </div>

        {/* Content */}
        <div className='pb-6 overflow-y-auto max-h-[calc(100vh-200px)]'>
          {activeMethod === 'manual'
            ? renderManualOffRamp()
            : renderCardOffRamp()}
        </div>
      </div>
    </div>
  );
}

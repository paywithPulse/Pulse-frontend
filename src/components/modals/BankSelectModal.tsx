import { useState } from 'react';
import { X, Search } from 'lucide-react';

type Bank = {
  id: string;
  name: string;
};

const BANKS: Bank[] = [
  { id: 'access', name: 'Access Bank' },
  { id: 'first_bank', name: 'First Bank of Nigeria' },
  { id: 'gtbank', name: 'Guaranty Trust Bank' },
  { id: 'uba', name: 'United Bank for Africa' },
  { id: 'zenith', name: 'Zenith Bank' },
  { id: 'fidelity', name: 'Fidelity Bank' },
  { id: 'ecobank', name: 'Ecobank Nigeria' },
  { id: 'fcmb', name: 'First City Monument Bank (FCMB)' },
  { id: 'sterling', name: 'Sterling Bank' },
  { id: 'polaris', name: 'Polaris Bank' },
  { id: 'heritage', name: 'Heritage Bank' },
  { id: 'suntrust', name: 'SunTrust Bank' },
  { id: 'titan_trust', name: 'Titan Trust Bank' },
  { id: 'providus', name: 'Providus Bank' },
  { id: 'unity', name: 'Unity Bank' },
  { id: 'wema', name: 'Wema Bank' },
  { id: 'standard_chartered', name: 'Standard Chartered Bank' },
  { id: 'globus', name: 'Globus Bank' },
  { id: 'optimus', name: 'Optimus Bank' },
  { id: 'parallex', name: 'Parallex Bank' },
  { id: 'jaiz', name: 'Jaiz Bank' },
];

type BankSelectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (bank: string) => void;
};

export default function BankSelectModal({
  isOpen,
  onClose,
  onSelect,
}: BankSelectModalProps) {
  const [search, setSearch] = useState('');

  const filteredBanks = BANKS.filter((bank) =>
    bank.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm'
      onClick={onClose} // close on backdrop click
    >
      <div
        className='w-full max-w-md bg-[#16191b] rounded-2xl shadow-lg border border-graphite p-6 relative'
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside modal
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-white'
        >
          <X className='w-5 h-5' />
        </button>

        {/* Header */}
        <h3 className='text-lg font-semibold text-white mb-4'>
          Select Your Bank
        </h3>

        {/* Search */}
        <div className='relative mb-4'>
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search bank...'
            className='w-full pl-10 pr-4 py-3 rounded-xl bg-[#0f1113] border border-graphite text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        {/* Bank list */}
        <div className='max-h-64 overflow-y-auto space-y-2'>
          {filteredBanks.length > 0 ? (
            filteredBanks.map((bank) => (
              <button
                key={bank.id}
                onClick={() => {
                  onSelect(bank.name);
                  onClose();
                }}
                className='w-full text-left px-4 py-3 rounded-xl bg-[#1c1f21] hover:bg-blue-600 text-white transition'
              >
                {bank.name}
              </button>
            ))
          ) : (
            <p className='text-gray-400 text-sm text-center'>No banks found</p>
          )}
        </div>
      </div>
    </div>
  );
}

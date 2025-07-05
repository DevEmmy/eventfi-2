"use client"
import React, { useState } from 'react';
import { 
  Wallet, 
  Send, 
  Receive, 
  Story,
  Copy,
  Export,
  ArrowUp,
  ArrowDown,
  Refresh,
  Shield,
  Code,
  DollarCircle,
  TrendUp,
  TrendDown,
  Lock,
  Unlock,
  Chart,
  Calendar,
  Filter,
  SearchNormal
} from 'iconsax-react';

const DashboardWallet = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // Enhanced mock wallet data
  const wallet = {
    address: '0x1234567890abcdef1234567890abcdef12345678',
    balance: {
      ETH: { amount: 2.5, value: 4500, change: 5.2 },
      USDC: { amount: 1500, value: 1500, change: -1.8 },
      DAI: { amount: 500, value: 500, change: 0.5 },
      MATIC: { amount: 1000, value: 800, change: 12.3 }
    },
    totalValue: 7300,
    totalChange: 3.2,
    currency: 'USD',
    isLocked: false,
    lastBackup: '2024-12-01'
  };

  // Enhanced transactions
  const transactions = [
    {
      id: 'tx-1',
      type: 'send',
      amount: -0.1,
      currency: 'ETH',
      value: -180,
      to: '0x9876543210fedcba9876543210fedcba98765432',
      date: '2024-12-10',
      time: '14:30',
      status: 'confirmed',
      hash: '0xabc123def456...',
      gas: 0.002,
      network: 'Ethereum'
    },
    {
      id: 'tx-2',
      type: 'receive',
      amount: 100,
      currency: 'USDC',
      value: 100,
      from: '0x1111111111111111111111111111111111111111',
      date: '2024-12-08',
      time: '09:15',
      status: 'confirmed',
      hash: '0xdef456abc123...',
      gas: 0,
      network: 'Polygon'
    },
    {
      id: 'tx-3',
      type: 'send',
      amount: -50,
      currency: 'DAI',
      value: -50,
      to: '0x2222222222222222222222222222222222222222',
      date: '2024-12-05',
      time: '16:45',
      status: 'pending',
      hash: '0x123abc456def...',
      gas: 0.001,
      network: 'Ethereum'
    },
    {
      id: 'tx-4',
      type: 'receive',
      amount: 1000,
      currency: 'MATIC',
      value: 800,
      from: '0x3333333333333333333333333333333333333333',
      date: '2024-12-03',
      time: '11:20',
      status: 'confirmed',
      hash: '0x456def789abc...',
      gas: 0,
      network: 'Polygon'
    },
    {
      id: 'tx-5',
      type: 'send',
      amount: -200,
      currency: 'USDC',
      value: -200,
      to: '0x4444444444444444444444444444444444444444',
      date: '2024-12-01',
      time: '13:45',
      status: 'failed',
      hash: '0x789abc123def...',
      gas: 0.003,
      network: 'Ethereum'
    }
  ];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(wallet.address);
  };

  const getTransactionIcon = (type: string) => {
    return type === 'send' ? ArrowUp : ArrowDown;
  };

  const getTransactionColor = (type: string) => {
    return type === 'send' ? 'text-red-400' : 'text-green-400';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return '✓';
      case 'pending': return '⏳';
      case 'failed': return '✗';
      default: return '?';
    }
  };

  const filteredTransactions = transactions.filter(tx =>
    tx.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.currency.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tx.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Wallet</h1>
          <p className="text-white/70">Manage your cryptocurrency wallet and transactions</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors">
            <Refresh size={20} className="inline mr-2" color="white" />
            Refresh
          </button>
          <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
            <Code size={20} className="inline mr-2" color="white" />
            Show QR
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Wallet Overview */}
        <div className="lg:col-span-1">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-purple-600/20 mx-auto mb-4 flex items-center justify-center">
                <Wallet size={32} color="#a855f7" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Wallet Balance</h2>
              <p className="text-3xl font-bold text-white">${wallet.totalValue.toLocaleString()}</p>
              <div className="flex items-center justify-center space-x-2 mt-1">
                <TrendUp size={16} color="#10b981" />
                <span className="text-green-400 text-sm">+{wallet.totalChange}%</span>
                <span className="text-white/50 text-sm">this week</span>
              </div>
            </div>

            {/* Wallet Status */}
            <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {wallet.isLocked ? (
                    <Lock size={16} color="#ef4444" />
                  ) : (
                    <Unlock size={16} color="#10b981" />
                  )}
                  <span className="text-white text-sm">
                    {wallet.isLocked ? 'Locked' : 'Unlocked'}
                  </span>
                </div>
                <span className="text-xs text-white/50">
                  Last backup: {wallet.lastBackup}
                </span>
              </div>
            </div>

            {/* Wallet Address */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-white/70 mb-2">Wallet Address</label>
              <div className="flex items-center space-x-2 p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-white font-mono text-sm flex-1 truncate">
                  {wallet.address}
                </span>
                <button
                  onClick={handleCopyAddress}
                  className="p-1 rounded hover:bg-white/10 transition-colors"
                  title="Copy address"
                >
                  <Copy size={16} color="white" />
                </button>
              </div>
            </div>

            {/* Token Balances */}
            <div className="space-y-3">
              <h3 className="text-white font-medium">Token Balances</h3>
              {Object.entries(wallet.balance).map(([token, data]) => (
                <div key={token} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-purple-400">{token[0]}</span>
                    </div>
                    <div>
                      <span className="text-white font-medium">{token}</span>
                      <div className="flex items-center space-x-1">
                        {data.change >= 0 ? (
                          <TrendUp size={12} color="#10b981" />
                        ) : (
                          <TrendDown size={12} color="#ef4444" />
                        )}
                        <span className={`text-xs ${data.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {data.change >= 0 ? '+' : ''}{data.change}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">{data.amount}</div>
                    <div className="text-xs text-white/70">${data.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 space-y-3">
              <button className="w-full px-4 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors">
                <Send size={20} className="inline mr-2" color="white" />
                Send
              </button>
              <button className="w-full px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors">
                <Receive size={20} className="inline mr-2" color="white" />
                Receive
              </button>
              <button className="w-full px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors">
                <Chart size={20} className="inline mr-2" color="white" />
                Analytics
              </button>
            </div>
          </div>
        </div>

        {/* Transactions */}
        <div className="lg:col-span-2">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Transaction History</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <SearchNormal size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" color='white' />
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                </div>
                <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors">
                  <Filter size={16} className="inline mr-2" color="white" />
                  Filter
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {filteredTransactions.map((tx) => {
                const IconComponent = getTransactionIcon(tx.type);
                return (
                  <div key={tx.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.type === 'send' ? 'bg-red-500/20' : 'bg-green-500/20'
                      }`}>
                        <IconComponent size={20} color={tx.type === 'send' ? '#f87171' : '#4ade80'} />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-medium capitalize">{tx.type}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(tx.status)}`}>
                            {getStatusIcon(tx.status)} {tx.status}
                          </span>
                          <span className="text-xs text-white/50 bg-white/10 px-2 py-1 rounded">
                            {tx.network}
                          </span>
                        </div>
                        <p className="text-sm text-white/70">
                          {tx.type === 'send' ? 'To: ' : 'From: '}
                          {tx.type === 'send' ? tx.to : tx.from}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-white/50">
                          <span>{tx.date} at {tx.time}</span>
                          {tx.gas > 0 && (
                            <span>Gas: {tx.gas} {tx.currency}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-medium ${getTransactionColor(tx.type)}`}>
                        {tx.type === 'send' ? '-' : '+'}{Math.abs(tx.amount)} {tx.currency}
                      </p>
                      <p className="text-sm text-white/70">
                        ${Math.abs(tx.value)}
                      </p>
                      <button className="text-xs text-white/50 hover:text-white/70 transition-colors">
                        <Export size={12} className="inline mr-1" color="white" />
                        View
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Security Info */}
            <div className="mt-8 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <div className="flex items-center space-x-3">
                <Shield size={20} color="#4ade80" />
                <div>
                  <h3 className="text-white font-medium">Wallet Security</h3>
                  <p className="text-sm text-white/70">Your wallet is secured with industry-standard encryption and multi-factor authentication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Send size={20} color="#3b82f6" />
            </div>
            <div>
              <h3 className="text-white font-medium">Send Funds</h3>
              <p className="text-sm text-white/70">Transfer to other wallets</p>
            </div>
          </div>
          <button className="w-full px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm transition-colors">
            Send Now
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <Receive size={20} color="#4ade80" />
            </div>
            <div>
              <h3 className="text-white font-medium">Receive Funds</h3>
              <p className="text-sm text-white/70">Get your wallet address</p>
            </div>
          </div>
          <button className="w-full px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm transition-colors">
            Show Address
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Chart size={20} color="#a855f7" />
            </div>
            <div>
              <h3 className="text-white font-medium">Analytics</h3>
              <p className="text-sm text-white/70">View spending patterns</p>
            </div>
          </div>
          <button className="w-full px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm transition-colors">
            View Analytics
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardWallet; 
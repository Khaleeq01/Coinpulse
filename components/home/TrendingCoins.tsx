import { fetcher } from '@/lib/coingecko.actions'
import { cn, formatCurrency } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { DataTable } from '../DataTable';

const TrendingCoins = async () => {
    const trendingResp = await fetcher<{coins:TrendingCoin[]}>
    ('search/trending',undefined,300);
    const trendingCoins = trendingResp.coins || [];

    const columns: DataTableColumn<TrendingCoin>[] = [
  {
    header: 'Name',
    cellClassName: 'name-cell',
    cell: (coin) => {
      const item = coin.item;

      return (
        <Link href={`/coins/${item.id}`} className='flex items-center gap-3'>
          <Image src={item.large} alt={item.name} width={36} height={36} />
          <div>
            <p className='font-medium'>{item.name}</p>
            <p className='text-sm text-muted-foreground'>{item.symbol.toUpperCase()}</p>
          </div>
        </Link>
      )
    },
  },
  {
    header: 'Price',
    cellClassName: 'price-cell',
    cell: (coin) => {
      const price = coin.item.data.price;
      return <p>{formatCurrency(price)}</p>
    }
  },
  {
    header: '24h Change',
    cellClassName: 'change-cell',
    cell: (coin) => {
      const item = coin.item;
      const change = item.data.price_change_percentage_24h.usd;
      const isTrendingUp = change > 0;

      return (
        <div className={cn('price-change flex items-center gap-2', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
          {isTrendingUp ? (
            <TrendingUp width={16} height={16} />
          ) : (
            <TrendingDown width={16} height={16} />
          )}
          <p>{change.toFixed(2)}%</p>
        </div>
      )
    }
  }
]
  return (
    <div id="trending-coins">
      <h4>Trending Coins</h4>
      <div id="trending-coins">
    <DataTable 
    data={trendingCoins.slice(0,6) || []}
    columns={columns}
    rowKey={(row)=>row.item.id} 
    tableClassName='trending-coins-table'
    headerCellClassName='py-3!'
    bodyCellClassName='py-2!'
      />
      </div>
    </div>
  )
}

export default TrendingCoins

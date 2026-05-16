'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { searchCoins } from '@/lib/coingecko.actions';
import Image from 'next/image';

interface SearchCommandProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SearchCommand({ open, setOpen }: SearchCommandProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setOpen]);

  React.useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const data = await searchCoins(query);
        setResults(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const onSelect = (coinId: string) => {
    setOpen(false);
    router.push(`/coins/${coinId}`);
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput 
        placeholder="Search for coins..." 
        value={query}
        onValueChange={setQuery}
        className="cmd-input"
      />
      <CommandList className="list">
        <CommandEmpty className="empty">
          {loading ? 'Searching...' : 'No results found.'}
        </CommandEmpty>
        {results.length > 0 && (
          <CommandGroup heading={<span className="heading">Coins</span>} className="group">
            {results.map((coin) => (
              <CommandItem
                key={coin.id}
                value={`${coin.name} ${coin.symbol}`}
                onSelect={() => onSelect(coin.id)}
                className="search-item"
              >
                <div className="coin-info">
                  <Image src={coin.thumb} alt={coin.name} width={36} height={36} />
                  <div>
                    <span>{coin.name}</span>
                    <span className="coin-symbol">{coin.symbol}</span>
                  </div>
                </div>
                <div className="ml-auto text-right">
                  {coin.market_cap_rank && (
                    <span className="coin-price text-muted-foreground">Rank #{coin.market_cap_rank}</span>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}

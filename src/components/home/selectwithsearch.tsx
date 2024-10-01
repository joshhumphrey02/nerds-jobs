'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { IFilters } from '@/type';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { useCountryCode } from '@/hooks/usecountryCode';
import Image from 'next/image';

interface SelectWithSearchProps {
	data: string[];
	heading: string;
	searchOptions: IFilters;
	setSearchOptions: (value: React.SetStateAction<IFilters>) => void;
	fetchData?: () => void;
}

export function SelectWithSearch({
	data,
	heading,
	searchOptions,
	setSearchOptions,
	fetchData,
}: SelectWithSearchProps) {
	const [open, setOpen] = React.useState(false);
	const updateData = React.useCallback(
		({ value }: { value: string }) => {
			setSearchOptions((prevSearchOptions) => {
				const currentOptions = prevSearchOptions[heading as keyof IFilters];
				let updatedOptions: string[] = [];

				if (Array.isArray(currentOptions)) {
					if (currentOptions.includes(value)) {
						updatedOptions = currentOptions.filter(
							(existingValue: string) => existingValue !== value
						);
					} else {
						updatedOptions = [...currentOptions, value];
					}
				}

				return {
					...prevSearchOptions,
					[heading as keyof IFilters]: updatedOptions,
				};
			});
		},
		[setSearchOptions, heading]
	);
	const { code } = useCountryCode();
	const countryName = React.useCallback(
		({ value }: { value: string }): string => {
			return value.split(',')[0];
		},
		[]
	);
	const dataItemLenght = searchOptions[heading as keyof IFilters].length;
	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className={cn(
						dataItemLenght > 0 ? 'ring-1 ring-gray-300 ' : ' border-none',
						'w-full h-full justify-between '
					)}>
					<div className="flex gap-1 items-center">
						<span className="text-sm font-normal">
							{searchOptions[heading as keyof IFilters].length > 0
								? searchOptions[heading as keyof IFilters][0]
								: `Select ${heading}..`}
						</span>
						<Badge
							className={cn(
								dataItemLenght > 1 ? 'flex' : 'hidden',
								'text-[10px] py-[0rem] px-[.29rem] bg-blue-500'
							)}>
							{dataItemLenght}
						</Badge>
					</div>
					<ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[320px] sm:w-[400px] p-0">
				<Command className="rounded-lg border shadow-md">
					<CommandInput placeholder="Type to search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading={heading}>
							{data &&
								data.map((item, i) => {
									const countryN = countryName({ value: item });
									const countryCode = code({ countryName: countryN });

									return (
										<CommandItem
											key={item + i}
											value={item}
											className="flex justify-between items-center">
											<div className="flex gap-1 items-center flex-1">
												<Checkbox
													id={'item' + i}
													checked={
														searchOptions[heading as keyof IFilters].includes(
															item
														)
															? true
															: false
													}
													className="mr-2 border-blue-500 data-[state=checked]:bg-blue-500"
													onClick={() => {
														updateData({ value: item });
														fetchData && fetchData();
													}}
												/>
												<Label
													htmlFor={'item' + i}
													className="text-black font-normal cursor-pointer">
													{countryName({ value: item })}
												</Label>
											</div>
											<Image
												alt={item}
												width={20}
												height={20}
												src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${
													countryCode === 'Country code not found'
														? 'US'
														: countryCode
												}.svg`}
												objectFit="cover"
											/>
										</CommandItem>
									);
								})}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}

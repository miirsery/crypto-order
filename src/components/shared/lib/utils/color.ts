const transactionTypesMap: Record<string, string> = {
  'Game entry': '#97E59A',
  'Beneficial payment': '#A8D5FF',
  'Referral payout': '#FFA8D7',
  'Your referrals': '#AC97FF',
}

export const generateColorByType = (type: string): string => {
  return transactionTypesMap[type]
}

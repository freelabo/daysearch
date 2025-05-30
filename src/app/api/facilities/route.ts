import { NextResponse } from 'next/server';
import { searchFacilities } from '@/lib/elasticsearch';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const { results } = await searchFacilities({});
    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error fetching facilities:', error);
    return NextResponse.json(
      { error: 'Failed to fetch facilities' },
      { status: 500 }
    );
  }
} 
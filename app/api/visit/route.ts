import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'visits.json');

export async function POST() {
  try {
    let visits = 0;
    try {
      const data = await fs.readFile(DATA_FILE, 'utf-8');
      visits = JSON.parse(data).visits;
    } catch (e) {
      // File doesn't exist yet or is invalid, visits starts at 0
    }
    
    visits++;
    
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify({ visits }));
    
    return NextResponse.json({ visits });
  } catch (error) {
    console.error("Error updating visits:", error);
    return NextResponse.json({ visits: 0 }, { status: 500 });
  }
}

export async function GET() {
  try {
    let visits = 0;
    try {
      const data = await fs.readFile(DATA_FILE, 'utf-8');
      visits = JSON.parse(data).visits;
    } catch (e) {
      // File doesn't exist yet, visits is 0
    }
    return NextResponse.json({ visits });
  } catch (error) {
    return NextResponse.json({ visits: 0 }, { status: 500 });
  }
}

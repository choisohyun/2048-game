'use client';

import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {useEffect, useState} from "react";
import {getLocalStorage} from "@/src/utils/storage";
import Block from "@/src/components/block";

const inter = Inter({ subsets: ['latin'] })

const NEW_RECORD = 'new-record'

export default function Home() {
    const [newRecord, setNewRecord] = useState(0);
    const [blocks, setBlocks] = useState(Array.from(Array(16).keys()));

    useEffect(() => {
        const {getItem} = getLocalStorage()
        const initRecord = Number(getItem(NEW_RECORD))
        initRecord && setNewRecord(initRecord)
    }, [])

    useEffect(() => {
        const { setItem } = getLocalStorage()
        setItem(NEW_RECORD, newRecord.toString())
    }, [newRecord])

    return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Let&apos;s play funny 2048 game
        </p>
          <h2 className={inter.className}>Your Best Score is <span className={styles.red}>{newRecord}</span></h2>
      </div>

      <div className={styles.grid}>
        {blocks.map((value) => (<Block key={value} value={value}/>))}
      </div>
    </main>
  )
}

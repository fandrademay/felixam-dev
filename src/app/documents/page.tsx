'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import '../fonts.css';

import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// import dissPDF from 'https://github.com/fandrademay/majorproject/blob/main/submission/fea6_ProjectReport_2024.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Home() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(1)
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.ctas}>
            <Link className={styles.primary} href="/contact" prefetch={true} replace={true}>Contact</Link>
            
            <Link className={styles.secondary}
              href="/documents"
              prefetch={true}
              replace={true}
            >
              <Image
                src="/file.svg"
                width={20}
                height={20}
                alt="documents"
              />
              Documents
            </Link>
            
            <Link
              className={styles.minor}
              href="https://www.linkedin.com/in/felixAmay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin-White-34.png"
                width={20}
                height={20}
                alt="LinkedIn"
              />
            </Link>
            <Link
              className={styles.minor}
              href="https://github.com/fandrademay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-mark-white.svg"
                width={20}
                height={20}
                alt="GitHub"
              />
            </Link>
            <Link
              className={styles.minor}
              href="https://felixam.dev"
            >
              <Image
                src="/home.svg"
                width={20}
                height={20}
                alt="Home"
              />
            </Link>

          </div>
        </div>
        
        <div className={styles.main}>
          <h1>Documents</h1>
          <>
            <Document
            file={'fea6_ProjectReport_2024.pdf'}
            onLoadSuccess={onDocumentLoadSuccess}
            
            >
              <Page pageNumber={pageNumber} scale={0.3} canvasBackground="#ccc"/>
            </Document>
              <p>
                Dissertation Paper <button className={styles.minor}><Image src="/download.svg" width={20} height={20} alt="Download"/></button>
              </p>
          </>
        </div>

      </main>
    </div>
  );
}

'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import '../fonts.css';

// import React from 'react';
// import { Document, Page } from 'react-pdf';
// import { pdfjs } from 'react-pdf';
// import 'react-pdf/dist/Page/TextLayer.css';
// import 'react-pdf/dist/Page/AnnotationLayer.css';

// import dissPDF from 'https://github.com/fandrademay/majorproject/blob/main/submission/fea6_ProjectReport_2024.pdf'

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const aspect_ratio = 1,
    size = 15;

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>Documents</h1>
          <div className={styles.ctas}>
            <Link
              href={'fea6_ProjectReport_2024.pdf'}
              className={styles.major}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Image
                src="download.svg"
                width={aspect_ratio * size}
                height={size}
                className='pt-2'
                alt="Download Dissertation"
              />
              <span className="ml-4 ">Dissertation</span>
            </Link>
          </div>
      </div>
    </div>
  );
}

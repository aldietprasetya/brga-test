import React, { useRef } from 'react';
import Image from 'next/image'
import { useReactToPrint } from 'react-to-print';
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Sidebar from '../../../components/Sidebar'
import styles from '../../../styles/Home.module.scss'
import mng from '../../../styles/Managemen.module.scss'
import { ComponentToPrint } from '../../../components/Print';

export default function konfirmasi() {

  const componentRef = useRef();
  const handleBtnPreview = useReactToPrint({
    content: () => componentRef.current,
  });

  function handleBtnDraft() {
    alert('Simpan di Draft')
  }
  function handleBtnAjukan() {
    alert('Ajukan')
  }

  return (
    <div className={styles.container}>

      <Header/>

      <div className='container flex justify-between mx-auto my-6'>
        <Sidebar/>

        <div className='absolute top-0 opacity-0 z-0'>
          <ComponentToPrint ref={componentRef} />
        </div>

        <div className={mng.base}>
          <div className={mng.base__wrapper}>
            <div className={mng.base__breadcrumb}>
              <Image src="/img/icon/icon-home.svg" alt="Home Icon" width={14} height={14} />
              <span className={mng.base__breadcrumb_arrow}></span>
              <p>Beranda</p>
              <span className={mng.base__breadcrumb_arrow}></span>
              <p>Buat Laporan</p>
              <span className={mng.base__breadcrumb_arrow}></span>
              <p>Aspek Manajemen</p>
            </div>
            <p className={mng.base__title}>Konfirmasi</p>
            <p className={mng.base__content}>
              Dengan mengisi laporan perkebunan di atas, Anda mengakui kebenaran data usaha perkebunan yang akan diserahkan pada Dinas Perkebunan Provinsi Jawa Barat.<br/><br/>
              Apabila Anda belum yakin untuk melakukan pengiriman laporan sila pilih opsi Simpan di Draft, jika sebaliknya sila pilih opsi Ajukan. Anda dapat melihat status pengajuan Laporan Perkebunan melalui Menu Master Basis Data. Klik Lihat Preview Laporan untuk melihat tampilan Laporan Perkebunan dalam bentuk PDF.<br/><br/>
              Terima kasih.
            </p>
            <div className='flex justify-end items-center mt-9 pt-0.5'>
              <button className={`${mng["base__btnpreview"]} ${"mt-1"}`} onClick={handleBtnPreview}>
                <Image src="/img/icon/icon-export.svg" alt="Export Icon" width={16} height={16} />
                <span className="ml-1.5">Lihat Preview Laporan</span>
              </button>
              <button className={`${mng["base__btndraft"]} ${"mt-1"}`} onClick={handleBtnDraft}>
                Simpan di Draft
              </button>
              <button className={`${mng["base__btnajukan"]} ${"mt-1"}`} onClick={handleBtnAjukan}>
                Ajukan
              </button>
            </div>
          </div>


        </div>
      </div>

      <Footer/>

    </div>

  )
}

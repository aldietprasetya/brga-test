import React, { useState, useEffect, useRef } from 'react'
import styles from '../../../styles/Home.module.scss'
import mng from '../../../styles/Managemen.module.scss'

export const ComponentToPrint = React.forwardRef((props, ref) => {

  const [komisaris, setKomisaris] = useState([])
  const [direksi, setDireksi] = useState([])
  const [administrasi, setAdministrasi] = useState('')
  const [tenagaKerja, setTenagaKerja] = useState([])
  const [rencanaInvest, setRencanaInvest] = useState([])

  useEffect(() => {
    let retrievedObject = JSON.parse(localStorage.getItem('dataSubmit'));

    setAdministrasi(retrievedObject.administrasi)
    setKomisaris(retrievedObject.komisaris)
    setDireksi(retrievedObject.direksi)

    let jml = 0;
    retrievedObject.tenagaKerja.forEach((item, i) => {
      jml += Number(item.value)
    });
    retrievedObject.tenagaKerja.push({
      'title':'Jumlah','value':jml
    })

    setTenagaKerja(retrievedObject.tenagaKerja)
    setRencanaInvest(retrievedObject.rencanaInvest)

  }, [])

  return (
    <div className={mng.base} ref={ref}>

      <div className={mng.base__print}>
        <h1 className={mng.base__print_title}>B. Aspek Manajemen</h1>
        <ol className={mng.base__print_list}>

          <li>Struktur Organisasi dan Nama Pengelola</li>

          <ol className={mng.base__print_sublist}>
            <li>Susunan Komisaris</li>
              <ul className={mng.base__print_suberlist}>
                {
                  komisaris == undefined ?
                  <>
                  <li><span>Komisaris Utama</span>:<span></span></li>
                  <li><span>Komisaris</span>:<span></span></li>
                  <li><span>Komisaris</span>:<span></span></li>
                  </>
                  :
                  komisaris.map((item,i) => (
                    <li key={i}>
                      <span>{item.title}</span>
                      :
                      <span>{item.value}</span>
                    </li>
                  ))
                }
              </ul>
            <li>Susunan Direksi</li>
              <ul className={mng.base__print_suberlist}>
                {
                  direksi == undefined ?
                  <>
                  <li><span>Direktur Utama</span>:<span></span></li>
                  <li><span>Direktur</span>:<span></span></li>
                  <li><span>Direktur</span>:<span></span></li>
                  </>
                  :
                  direksi.map((item,i) => (
                    <li key={i}>
                      <span>{item.title}</span>
                      :
                      <span>{item.value}</span>
                    </li>
                  ))
                }
              </ul>
            <li>
              <span>Administratur/Manajer</span>
              {
                administrasi == undefined ?
                <>:<span></span></>
                :
                <>:<span>{administrasi}</span></>
              }
            </li>
            <li>Tenaga Kerja</li>
              <ul className={mng.base__print_suberlist}>
              {
                tenagaKerja == undefined ?
                <>
                <li><span>Administratur</span>:<span></span>Orang</li>
                <li><span>Staf</span>:<span></span>Orang</li>
                <li><span>Bulanan</span>:<span></span>Orang</li>
                <li><span>Harian Tetap</span>:<span></span>Orang</li>
                <li><span>Harian Lepas</span>:<span></span>Orang</li>
                <li><span>Borongan/Musiman</span>:<span></span>Orang</li>
                <li><span>Jumlah</span>:<span></span>Orang</li>
                </>
                :
                tenagaKerja.map((item,i) => (
                  <li key={i}>
                    <span>{item.title}</span>
                    :
                    <span>{item.value}</span>
                    Orang
                  </li>
                ))
              }
              </ul>
          </ol>

          <li>Rencana Investasi/Eksploitasi</li>

          <ol className={mng.base__print_sublist}>

          {
            rencanaInvest == undefined ?
            <>
            <li>
              <ul>
                <li><span>Kegiatan Investasi/Eksploitasi</span>:<span></span></li>
                <li><span>Tahun</span>:<span></span></li>
                <li><span>Volume</span>:<span></span></li>
                <li><span>Nilai Biaya</span>:<span></span></li>
              </ul>
            </li>
            </>
            :
            rencanaInvest.map((items,i) => (
              <li key={i}>
                <ul>
                  {
                    items.map((item,ii) => (
                      <li><span>{item.title}</span>:<span>{item.value}</span></li>
                    ))
                  }
                </ul>
              </li>
            ))
          }

          </ol>



        </ol>
      </div>

    </div>
  )
});

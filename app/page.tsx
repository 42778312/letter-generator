"use client";
import Head from "next/head";
import React, { useState } from "react";

const init_data = {
  senderName: "",
  receiverName: "",
  senderStreet: "",
  senderCity: "",
  receiverStreet: "",
  senderPlz: "",
  receiverPlzAndCity: "",
  senderNumber: "",
  senderEmail: "",
};

export default function Home() {
  const [data, setData] = useState(init_data);
  const content = {
    title: "Brief",
    date:
      "Datum : " +
      new Date().getDate() +
      " " +
      new Date().toLocaleString("de-DE", { month: "long" }) +
      " " +
      new Date().getFullYear(),
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Head>
        <title>{content?.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            @media print {
              @page {
                size: A4;
                margin: 20mm;
              }
              body {
                print-color-adjust: exact;
                -webkit-print-color-adjust: exact;
              }
              .print-content {
                width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
              }
            }
          `}
        </style>
      </Head>

      <header className="py-8 print:hidden">
        <h1 className="font-bold text-center text-5xl text-gray-800">
          {content?.title}
        </h1>
      </header>

      <main className="flex flex-row flex-1 gap-4 px-4 print:p-0">
        {/* Form Section - 30% width */}
        <section className="w-[20%] px-4 py-6 space-y-4 print:hidden">
          <div>
            <div>Absender</div>
            <label
              htmlFor="senderName"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              className="px-4 py-2 mt-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm rounded-md"
              value={data?.senderName}
              type="text"
              id="senderName"
              onChange={(event) => {
                setData({ ...data, senderName: event.target.value.toString() });
              }}
              maxLength={50}
              placeholder="Alex Mustermann"
            />
          </div>
          <div>
            <label
              htmlFor="senderStreet"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              className="px-4 py-2 mt-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm rounded-md"
              value={data?.senderStreet}
              type="text"
              id="senderStreet"
              onChange={(event) => {
                setData({
                  ...data,
                  senderStreet: event.target.value.toString(),
                });
              }}
              maxLength={50}
              placeholder="Beispielstraße 123"
            />
          </div>
          <div>
            <label
              htmlFor="senderPlz"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              className="px-4 py-2 mt-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm rounded-md"
              value={data?.senderPlz + data?.senderCity}
              type="text"
              id="ns2"
              onChange={(event) => {
                setData({
                  ...data,
                  senderPlz: event.target.value.toLowerCase(),
                  senderCity: "",
                });
              }}
              maxLength={50}
              placeholder="12345, Beispielstadt"
            />
          </div>
          <div>
            <div>Empäfnger</div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              className="px-4 py-2 mt-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm rounded-md"
              value={data?.receiverName}
              type="text"
              id="receiverName"
              onChange={(event) => {
                setData({ ...data, receiverName: event.target.value });
              }}
              maxLength={50}
              placeholder="Beispielfirma GmbH"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              className="px-4 py-2 mt-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm rounded-md"
              value={data?.receiverStreet}
              type="text"
              id="receiverStreet"
              onChange={(event) => {
                setData({ ...data, receiverStreet: event.target.value });
              }}
              maxLength={50}
              placeholder="Beispielstraße 123"
            />
          </div>
          <div>
            <label
              htmlFor="receiverPlzAndCity"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              className="px-4 py-2 mt-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm rounded-md"
              value={data?.receiverPlzAndCity}
              type="text"
              id="receiverPlzAndCity"
              onChange={(event) => {
                setData({
                  ...data,
                  receiverPlzAndCity: event.target.value.toString(),
                });
              }}
              maxLength={50}
              placeholder="12345, Beispielstadt"
            />
          </div>
          <div className="flex flex-row justify-between pt-4">
            <button
              onClick={() => {
                window.print();
              }}
              className="px-6 py-2 bg-white shadow-sm rounded-md hover:bg-gray-50 text-gray-900 font-bold border text-sm text-center"
            >
              Print
            </button>
            <button
              className="px-6 py-2 bg-white shadow-sm rounded-md hover:bg-gray-50 text-gray-900 font-bold border text-sm text-center"
              onClick={() => setData(init_data)}
            >
              Clear
            </button>
          </div>
        </section>

        {/* A4 Preview Section - 70% width */}
        <section className="w-[75%] bg-white rounded-lg shadow-sm print:shadow-none print:w-full print-content">
          <div className="w-full max-w-[210mm] mx-auto p-16 print:p-0 min-h-[297mm] bg-white">
            <div className="space-y-2">
              <div className="text-right"></div>
              <div>
                <p>
                  Vor und nachname <br />
                  straße 123
                  <br />
                  PLZ stadt <br />
                </p>
              </div>
              <br />
              <div>
                <p>
                  Firma GmbH <br />
                  straße 123
                  <br />
                  PLZ stadt <br />
                </p>
              </div>
              <div className="text-right">
                <span>{content?.date}</span>
              </div>
              <div className="text-left font-medium">Betreff:</div>
              <div>
                Sehr geehrte Damen und Herren,
                <br />
                <br />
                hiermit kündige ich meinen Internet-Zugang zum nächstmöglichen
                Termin.
                <br />
                Bitte senden Sie mir in den nächsten Tagen eine
                Kündigungsbestätigung mit Angabe des Vertragsende-Datums. Vielen
                Dank im Voraus!
              </div>
              <div className="space-y-2">
                <div>Mit freundlichen Grüßen</div>
                <div> {data?.senderName}</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col space-y-2 items-center justify-center w-full h-24 border-t print:hidden">

        <div className="items-center flex flex-shrink-0 justify-center">
          <span> Mit </span>
          <span className="text-pink-600 px-1">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className="font-medium text-blue-600 hover:text-blue-700">
            gemacht | MoA
          </span>
        </div>
      </footer>
    </div>
  );
}

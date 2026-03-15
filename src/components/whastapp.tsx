"use client"

import { event } from "@/src/lib/pixel"

export default function BotaoWhatsapp() {
  function handleClick() {
    event("Contact", {
      button_name: "whatsapp",
      destination: "whatsapp",
    })

    window.open("https://wa.me/5522997921018", "_blank")
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button
        onClick={handleClick}
        className="rounded-2xl bg-green-500 px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-600 active:scale-95"
      >
        Pedir no WhatsApp
      </button>
    </div>
  )
}
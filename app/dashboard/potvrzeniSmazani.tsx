"use client"

type PotvrzeniProps = {
  smazatPrispevek: () => void
  potvrzeni: (toggle: boolean) => void
}

export default function PotvrzeniSmazani({ smazatPrispevek, potvrzeni }: PotvrzeniProps) {
  return (
    <div
      onClick={(e) => {potvrzeni(false)}}
      className="fixed bg-black/50 w-full h-full z-20 left-0 top-0 "
    >
      <div className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col gap-6">
        <h2 className="text-xl">
          Opravdu chcete příspěvek smazat?
        </h2>
        <button
          onClick={smazatPrispevek}
          className="bg-red-600 text-sm text-white py-2 px-4 rounded-md"
        >
          Smazat příspěvek!
        </button>
      </div>
    </div>
  )
}
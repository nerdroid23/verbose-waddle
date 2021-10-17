import * as React from "react"
import { ThumbUpIcon } from '@heroicons/react/solid'

const timeline = [
  {
    id: 1,
    waverAddress: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92261',
    icon: ThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 2,
    waverAddress: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92262',
    icon: ThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    waverAddress: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92263',
    icon: ThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function gradientText(text) {
  return (
    <span
      className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">{text}</span>
  )
}

function HomePage() {
  const wave = () => {
  }

  return (
    <div className="space-y-5">
      <p className="text-3xl font-bold text-center">
        Connect your <span className="font-extrabold">{gradientText('eth')}</span> wallet to {gradientText('wave')}!
      </p>

      <button
        className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Wave!
      </button>

      <div className="bg-gray-200 overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flow-root">
            <ul role="list" className="-mb-8">
              {timeline.map((event, eventIdx) => (
                <li key={event.id}>
                  <div className="relative pb-8">
                    {eventIdx !== timeline.length - 1 ? (
                      <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"/>
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true"/>
                  </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            <span
                              className="font-medium text-gray-900">{event.waverAddress}</span> has {gradientText('waved')}!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

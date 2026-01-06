import { navigationMock } from '@/shared/mocks/navigation'
import Link from 'next/link'

const Navigation = () => {
  return (
    <section>
      <nav className='h-full w-75 py-6 shadow-[10px_0_15px_-3px_rgba(0,0,0,0.1)]'>
        <ul>
          {navigationMock.map(({ label, link }, ind) => (
            <li key={ind} className='group hover:bg-warning-100'>
              <Link
                href={link}
                className='flex size-full px-8 py-3 font-semibold group-hover:text-neutral-500'
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export { Navigation }

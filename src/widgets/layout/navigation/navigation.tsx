import { navigationMock } from '@/shared/mocks/navigation'

const Navigation = () => {
  return (
    <section>
      <nav className='h-full w-75 py-6 shadow-[10px_0_15px_-3px_rgba(0,0,0,0.1)]'>
        <ul>
          {navigationMock.map(({ label, link }, ind) => (
            <li key={ind} className='hover:bg-warning-300 px-8 py-3'>
              <a href={link} className='flex size-full'>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export { Navigation }

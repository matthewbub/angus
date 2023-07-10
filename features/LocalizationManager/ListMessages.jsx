import clsx from 'clsx'
import Badge from '../../components/Badge'

const statuses = {
  'p001': 'text-green-700 bg-green-50 ring-green-600/20',
  'global': 'text-gray-600 bg-gray-50 ring-gray-500/10',
  'p003': 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
}
const projects = [
  {
    id: 1,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus',
    href: '#',
    status: 'p001',
    createdBy: 'Leslie Alexander',
    language: 'English',
    dueDate: 'March 17, 2023',
    dueDateTime: '2023-03-17T00:00Z',
    tags: ['Engineering', 'Product'],
  },
  {
    id: 2,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus',
    href: '#',
    status: 'global',
    createdBy: 'Leslie Alexander',
    language: 'English',
    dueDate: 'May 5, 2023',
    dueDateTime: '2023-05-05T00:00Z',
    tags: ['Engineering', 'Product'],
  },
  {
    id: 3,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus',
    href: '#',
    status: 'global',
    createdBy: 'Courtney Henry',
    language: 'English',
    dueDate: 'May 25, 2023',
    dueDateTime: '2023-05-25T00:00Z',
    tags: ['Engineering', 'Product'],
  },
  {
    id: 4,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus',
    href: '#',
    status: 'global',
    createdBy: 'Leonard Krasner',
    language: 'English',
    dueDate: 'June 7, 2023',
    dueDateTime: '2023-06-07T00:00Z',
    tags: ['Engineering', 'Product'],
  },
  {
    id: 5,
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus',
    href: '#',
    status: 'p003',
    createdBy: 'Courtney Henry',
    language: 'English',
    dueDate: 'June 10, 2023',
    dueDateTime: '2023-06-10T00:00Z',
    tags: ['Engineering', 'Product'],
  },
]


export default function ListMessages() {
  return (
    <>
      <div className="grid grid-cols-12 my-8">
        <div className="col-span-3">
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
            Date
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>Default</option>
              <option>Ascending (Oldest - Newest)</option>
              <option>Descending (Newest - Oldest)</option>
            </select>
          </div>

        </div >
      </div >


      <ul role="list" className="space-y-2">
        {projects.map((project) => (
          <li key={project.id} className="flex items-center justify-between gap-x-6 p-5 border">
            <div className="min-w-0">
              <div className="grid grid-cols-6 gap-4">
                <div className='col-span-5'>
                  <p className="text-sm font-semibold leading-none text-gray-900 pb-4">{project.message}</p>
                </div>
                <div className='col-span-1 flex items-start justify-end'>
                  <p
                    className={clsx(
                      statuses[project.status],
                      'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset w-fit'
                    )}
                  >
                    {project.status}
                  </p>
                </div>
              </div>
              <div className="mt-1 flex flex-col gap-y-2 text-xs leading-5 text-gray-500">
                <div className='flex md:flex-row flex-col md:items-center md:space-x-2'>
                  <p>
                    Last updated &nbsp; <time dateTime={project.dueDateTime}>{project.dueDate}</time>
                  </p>
                  <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current hidden md:block">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <p className="truncate">Created by {project.createdBy}</p>
                  <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current hidden md:block">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <p className="truncate">Language: {project.language}</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <p>Tags:</p>
                  <div className='space-x-2'>
                    {project.tags.map((tag) => (
                      <Badge key={tag} styleType={'red'}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </li>
        ))}
      </ul>
    </>
  )
}

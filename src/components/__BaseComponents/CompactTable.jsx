export const Table = () => {
  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
            Name
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Title
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Email
          </th>
          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
            Role
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {people.map((person) => (
          <tr key={person.email}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
              {person.name}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                Edit<span className="sr-only">, {person.name}</span>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
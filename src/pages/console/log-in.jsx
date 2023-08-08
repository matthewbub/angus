import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

export default function Page() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const router = useRouter()

  const submitForm = async (data) => {
    const res = await fetch('/api/v1/log-in/from-console', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })

    const json = await res.json()

    if (json.error || json?.message && json?.message.length > 0) {
      return;
    }

    router.push('/')
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://bhoyxrelzzohrygasyjt.supabase.co/storage/v1/object/public/public/logo.png"
          alt="IE Portals"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight txt1" >
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 txt1" >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                {...register("email", { required: true })}
                className="block w-full rounded-md border-0 bg-white/20 py-1.5 txt1 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
              <div className='h-3'>
                {errors?.email && <p className="text-sm text-red-600">{errors?.email}</p>}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 txt1" >
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                {...register("password", { required: true })}
                className="block w-full rounded-md border-0 bg-white/20 py-1.5 txt1 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
              <div className='h-3'>
                {errors?.password && <p className="text-sm text-red-600">{errors?.password}</p>}
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 txt1 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
import OpenP from './OpenP'

export default function Positions() {
  return (
    <section className=' border-t-2 border-gray-900' id='positions'>
      <div>
        <h2 className='text-white font-[PoppinsBold] text-4xl text-center pt-16 md:pt-32'>
          Open Positions
        </h2>
        <span>
          <p className='text-white font-[Satoshi] text-center pt-4 px-6 md:px-0'>
            We are always looking for new talent to join our team.
          </p>
        </span>
        <div className='flex items-center justify-center gap-6 mt-4'>
          <div>
            <select
              name='all-locations'
              id='select-all-locations'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            >
              <option value='all positions' selected>
                All Positions
              </option>
              <option value='Mexico'>Mexico</option>
              <option value='United States'>United States</option>
              <option value='Canada'>Canada</option>
              <option value='Colombia'>Colombia</option>
              <option value='Argentina'>Argentina</option>
              <option value='Chile'>Chile</option>
              <option value='Peru'>Peru</option>
              <option value='Australia'>Australia</option>
              <option value='Germany'>Germany</option>
              <option value='Spain'>Spain</option>
              <option value='United Kingdom'>United Kingdom</option>
            </select>
          </div>
          <div>
            <select
              name='all-departments'
              id='select-all-departments'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            >
              <option value='all departments' selected>
                All Departments
              </option>
              <option value='Customer Service'>Customer Service</option>
              <option value='Marketing'>Marketing</option>
              <option value='Design'>Design</option>
              <option value='Frontend'>Frontend Developer</option>
              <option value='Backend'>Backend Developer</option>
              <option value='Fullstack'>Fullstack Developer</option>
              <option value='Engineering'>Engineering</option>
              <option value='Sales'>Sales</option>
              <option value='UIUX'>UI/UX</option>
            </select>
          </div>
        </div>
        <div className=''>
          <OpenP />
        </div>
      </div>
    </section>
  )
}

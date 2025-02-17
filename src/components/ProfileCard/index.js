export default function ProfileCard() {
  return (
    <div className='bg-gradient-to-r from-red-600  to-pink-700 p-4 text-white shadow rounded-[10px]'>
      <div className='flex justify-between'>
        <div className='flex'>
          <img className='w-11 h-11 rounded-full mr-3' src='/profile-picture.png' alt="profile-picture"/>
          <div>
            <h1 className='font-bold'>Tabay</h1>
            <p className='font-light text-xs'>UI/UX Designer</p>
          </div>
        </div>

        <div>
          <p className='font-light text-xs text-right'>Member Since</p>
          <h1 className='font-bold'>01 Juni 2021</h1>
        </div>
      </div>

      <div className='flex justify-between mt-5'>
        <div>
          <p className='font-light text-xs'>Location</p>
          <h1 className='font-bold'>Kantor Sahid</h1>
        </div>
        <p className='font-light text-xs self-end'>ICO</p>
      </div>
    </div>
  );
}

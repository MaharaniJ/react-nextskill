

function Header() {
  return (
    <div className="flex flex-row justify-around items-center min-w-full h-20 bg-red-100">
      <div>+01 23456789 kalles@domain.com</div>
      <div>summer sale discount off <span className="text-red-400">50%</span> shop now</div>
      <div className="flex gap-4">
        <div>store Locator</div>
        <div>USD-US Dollar</div>
      </div>
    </div>
  )
}

export default Header
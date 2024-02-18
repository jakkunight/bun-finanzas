import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="flex flex-row w-full overflow-clip items-center gap-2" >
      <div className="aspect-square min-h-4 max-h-12 border-green-900 border-4 rounded-full overflow-clip hover:brightness-125 hover:saturate-150" >
        <img src="https://png.pngtree.com/png-vector/20200121/ourmid/pngtree-financial-consulting-logo-vector-template-png-image_2132677.jpg" alt="" />
      </div>
      <Button>
        Dashboard
      </Button>
      <Button>
        Expenses
      </Button>
      <Button>
        Incomes
      </Button>
    </header>
  );
}

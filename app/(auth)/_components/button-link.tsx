import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface ButtonLinkProps {
  href: string;
  label: string;
}
const ButtonLink = ({ href, label }: ButtonLinkProps) => {
  const router = useRouter();

  return (
    <div className="text-center">
      <Button
        type="button"
        variant="link"
        onClick={() => router.push(href)}
        className="text-sm text-blue-600 hover:text-blue-800"
      >
        {label}
      </Button>
    </div>
  );
};

export default ButtonLink;

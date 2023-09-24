import SellCryptoCard from "@/features/OrderCard/SellCryptoCard";

interface OrderPageProps {
  params: {
    segments?: string[]
  }
}

//TODO buttons coloring
export default function OrderPage(props: OrderPageProps) {
  //TODO some validations about passed params
  const [orderType, asset, volume] =
    props.params.segments === undefined ?
      [undefined, undefined, undefined]
      : props.params.segments;

  return (
      <SellCryptoCard type={orderType} asset={asset} volume={volume} />
  );
}
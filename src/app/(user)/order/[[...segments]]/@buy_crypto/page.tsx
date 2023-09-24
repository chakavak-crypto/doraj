import BuyCryptoCard from "@/features/OrderCard/BuyCryptoCard";

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
      <BuyCryptoCard type={orderType} asset={asset} volume={volume} />
  );
}
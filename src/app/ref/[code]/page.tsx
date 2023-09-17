import {redirect} from "next/navigation";

export default function Page({ params }: { params: { code: string } }){
  redirect('/signup/?r='+params.code)
}
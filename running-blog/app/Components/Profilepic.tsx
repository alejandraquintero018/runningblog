import Image from "next/image";

export default function Profilepic() {
    return (
        <section className=" mx-auto p-5">
            <Image 
            className="border-4"
            src="/images/Running.png" 
            width={200} 
            height={300}
            alt="photo of Alejandra running"/>
        </section>
    )
}
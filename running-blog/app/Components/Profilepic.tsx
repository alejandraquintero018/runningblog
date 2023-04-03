import Image from "next/image";

export default function Profilepic() {
    return (
        <section className="w-full mx-auto ">
            <Image 
            className="border-4"
            src="/images/Running.png" 
            width={300} 
            height={400}
            alt="photo of Alejandra running "/>
        </section>
    )
}
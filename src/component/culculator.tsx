import { useForm } from 'react-hook-form'
import { useState } from 'react';
type inputs = {
    weight:number
}

const Calculate = () => {

    const { register, handleSubmit} = useForm<inputs>();
    const [Result, setResult] = useState<number>(0);

    const onSubmit = (data:any) => {
        const waterNeed = data.weight * 2.2 * 30/2 ;
        console.log(waterNeed.toFixed(0))
        setResult(parseInt(waterNeed.toFixed(0)));
    }

    return (
        <>
        <h1>ควรดื่มน้ำวันละเท่าไหร่</h1>
        <h1>{Result} มล.</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className='custom-input' placeholder='น้ำหนักของคุณ(กิโลกรัม)' {...register('weight')}/>
            <input type='submit' />
        </form>
        </>
    )
}

export default Calculate
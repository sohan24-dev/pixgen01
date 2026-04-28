import PhotoCard from "./PhotoCard";


const TopGeneration = async() => {
    const res = await fetch('https://pixgen01.vercel.app/data.json')
    const dataAll =await res.json()
    const data = dataAll.slice(0,8)
    // console.log(data);
    return (
        <div>
            <h1 className="text-2xl font-bold my-5">Top Generations</h1>

            <div className="grid grid-cols-4 gap-5">
                {data.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
            </div>
        </div>
    );
};

export default TopGeneration;
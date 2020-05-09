
export default function Card({ children }) {
    return (
        <div className="max-w-sm max-w-md max-w-lg rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
              {children}
          </div>
      </div>
    )
};


export function VImgCard({ props, children }) {
    return (
        <>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={props.imgSrc} alt={props.imgAlt} />
                <div class="px-6 py-4">
                    {children}
                </div>
            </div>
        </>
    )
};

export function HImgCard({props, children}) {
    return (
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
            <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
            </div>
            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                    {children}
                </div>
            </div>
        </div>
    )
}
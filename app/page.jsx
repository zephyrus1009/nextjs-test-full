import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col"><h1 className="head_text text-center">Discover & Share
    <br className="max-md:hidden"/>
    {/* Set độ rộng tối đa của element = medium device, và sẽ ẩn đi khi độ rộng của viewport lớn hơn medium device */}
    <span className="orange_gradient text-center">AI-Powered Prompts</span>
    </h1>
    <p className="desc text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat molestias fugiat repudiandae sint accusamus soluta nam inventore aperiam error harum, blanditiis in quaerat animi tempora ex praesentium maiores eius!</p>
    {/* desc là description*/}
    <Feed />
    </section>
  )
}

export default Home
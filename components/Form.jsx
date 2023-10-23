import Link from 'next/link';

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'><span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia nobis quo molestias obcaecati quibusdam nesciunt, ad deleniti. Quod dicta vero quos odio reprehenderit distinctio dolorem saepe, provident similique minima.
      </p>

<form 
onSubmit={handleSubmit}
className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
>
<label>
  <span className='font-satoshi font-semibold text-base text-gray-700'>Your AI Prompt</span>
<textarea
value={post.prompt}
onChange={(e) => setPost({...post, prompt: e.target.value})}
placeholder='Write your prompt here...'
required
className='form_textarea'
/>

  </label>

  <label>
  <span className='font-satoshi font-semibold text-base text-gray-700'>
    Tag {` `}
    <span className='font-normal'>(#product, #webdevelopment, #idea)</span>
  </span>
<input
value={post.tag}
onChange={(e) => setPost({...post, tag: e.target.value})}
placeholder='#tag'
required
className='form_input'
/>

  </label>

<div className='flex-end mx-3 mb-5 gap-4'>
  <Link href='/' className='text-gray-500 text-sm'>
  Cancel
  </Link>
  {/* nút cancel là tạo link vì nút này ta sẽ muốn nó có chức năng quay lại trang trước khi bấm vào, nên để link / để quay lại là hợp lý. */}
  <button 
  type='submit' disabled={submitting}
  className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
  >
{submitting ? `${type}...` : type}
</button>
{/* Button sẽ bị disabled (không bấm được) khi đã đang submitting rồi, để không bị submit nhiều lần. Đồng thời, tên của button này cũng được tự động thay đổi theo type của form. */}
</div>



</form>

      </section>
  )
}

export default Form
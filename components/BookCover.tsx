import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import BookCoverSvg from './BookCoverSvg';

type BookCoverVariant = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'wide' | 'tall';

const variantStyles:Record<BookCoverVariant, string> ={
  extraSmall : "book-cover_extra_small",
  small : "book-cover_small",
  medium : "book-cover_medium",
  large : "book-cover_large",
  extraLarge : "book-cover_extra_large",
  wide : "book-cover_wide",
  tall : "book-cover_tall"
}

interface Props {
  className?: string;
  variant?: BookCoverVariant;
  coverColor?: string;
  coverImage?: string;
}

const BookCover = ({
  className, 
  variant = "medium",
  coverColor = "#FFFFFF",
  coverImage = 'https://placehold.co/400x600.png',        
 
}: Props) => {
  return <div className={cn('relative transition-all duration-300',
   variantStyles[variant], className)} >


    <BookCoverSvg coverColor={coverColor} />
    <div className="absolute z-10  " 
    style= {{left: "12%", width: "87.5%", height:"88%"}}>
      <Image src={coverImage} alt = "Book cover" fill className="rounded-sm object-fill" />
    </div>
  </div>
}

export default BookCover

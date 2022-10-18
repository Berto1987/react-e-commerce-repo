import ProductCard from '../../components/product-card/product-card.component';
import { useState,useEffect, Fragment } from 'react';
import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import { selectCategoriesMap,selectIsCategoriesLoading } from '../../store/categories/category.selector';
import { CategoryTitle,CategoryContainer } from './category.styles';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsCategoriesLoading );
    const[products,setProducts] = useState(categoriesMap[category]);
    

    useEffect(() => {
        
        setProducts(categoriesMap[category]);
    }, [category,categoriesMap])

    return (
        <Fragment>
        <CategoryTitle>{category.toUpperCase()} </CategoryTitle>

        {
            isLoading ? <Spinner /> : <CategoryContainer>
            {
             products  && products.map((product) => <ProductCard key={product.id} product={product} />)
            }
           
            </CategoryContainer>
        }
        
        
         </Fragment>
    )
}

export default Category;
import {janitorialUniformFabricPost} from './blogPosts/cost-of-choosing-fabric-janitorial-uniforms'
import {nurseUniformFabricPost} from './blogPosts/choosing-fabric-nurse-uniforms'
import {stainsWorkUniformsPost} from './blogPosts/stains-work-uniforms'
import {uniformFitEmployeePerformancePost} from './blogPosts/uniform-fit-employee-performance'

export const blogContent = {
  seo: {
    title: 'Blog - Kostitch',
    description: 'Insights, trends, and expertise from Kostitch on garment manufacturing, apparel production, sustainability, and bringing fashion ideas to life.',
  },
  title: 'Kostitch Journal',
  subtitle: 'Insights on garment manufacturing, production trends, and bringing your apparel vision to life',
  posts: [
    nurseUniformFabricPost,
    uniformFitEmployeePerformancePost,
    stainsWorkUniformsPost,
    janitorialUniformFabricPost,
  ],
}

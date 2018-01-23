import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => {
	console.log(data);
	return (
		<div>
			{data.allHnStory.edges.map(({ node }) => (
				<div>
					<h3 key={node.id}>
						<a href={node.url}>{node.title}</a>
					</h3>
					<p>{node.by}</p>
					<p>{node.score}</p>
				</div>
			))}
		</div>
	);
};

export default IndexPage;

export const query = graphql`
	query StoriesQuery {
		allHnStory {
			edges {
				node {
					title
					id
					url
					score
					by
					content
				}
			}
		}
	}
`;

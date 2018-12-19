import React from 'react';
import { Layout, PlatformHeroBlock, PageContent } from 'components/layout';
import data from 'static/constants';

class Platform extends React.Component {
	static getInitialProps = async () => {
		const featuresData = data.page.features;

		return {
			featuresPageData: featuresData,
		};
	};

	getArticles = () => {
		const articles = [];
		this.props.featuresPageData.articles.map(d => {
			articles.push(<PageContent key={d.id} data={d} />);
		});
		return articles;
	};

	render() {
		const { title, description } = this.props.featuresPageData;

		return (
			<Layout
				title="Deep Cast - Platform"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				<PlatformHeroBlock title={title} description={description} />
				{/* {this.getArticles()} */}
			</Layout>
		);
	}
}
export default Platform;

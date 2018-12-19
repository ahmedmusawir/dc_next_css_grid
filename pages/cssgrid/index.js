import React from 'react';
import styled from 'styled-components';
import {
	Layout,
	Section,
	ContentSection,
	GridSection,
} from 'components/layout';
import {
	GridCard,
	GridBlock,
	GridBlockLarge,
	GridBlockSmall,
	GridTextBlock,
	GridImageBlock,
	GridVideoBlock,
} from 'components/general';

class CssGridPage extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - CSS Grid Example"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				<ContentSection bgColor="dark">
					<GridSection>
						<GridBlock>
							<GridVideoBlock />
						</GridBlock>
						<GridBlock>
							<GridTextBlock
								theme="dark"
								title="Welcome to Deep Cast"
								subtitle="We do AI like Walter White"
								details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Molestias dolores quia sit harum accusamus quaerat repudiandae.
								Facere amet, non pariatur qui voluptate, at nam molestiae
								sapiente, ipsa quasi minus est.
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Molestias dolores quia sit harum accusamus quaerat repudiandae.
								Facere amet, non pariatur qui voluptate, at nam molestiae
								sapiente, ipsa quasi minus est.
								"
							/>
						</GridBlock>
					</GridSection>
				</ContentSection>
				<ContentSection bgColor="light">
					<GridSection>
						<GridBlock>
							<GridImageBlock
								imageLink="https://picsum.photos/500/200?image=301"
								caption="Image Caption One"
								details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Molestias dolores quia sit harum accusamus quaerat repudiandae.
							Facere amet, non pariatur qui voluptate, at nam molestiae
							sapiente, ipsa quasi minus est."
							/>
						</GridBlock>
						<GridBlock>
							<GridImageBlock
								imageLink="https://picsum.photos/500/200?image=307"
								caption="Image Caption Two"
								details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Molestias dolores quia sit harum accusamus quaerat repudiandae.
							Facere amet, non pariatur qui voluptate, at nam molestiae
							sapiente, ipsa quasi minus est."
							/>
						</GridBlock>
						<GridBlock>
							<GridImageBlock
								imageLink="https://picsum.photos/500/200?image=304"
								caption="Image Caption Three"
								details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Molestias dolores quia sit harum accusamus quaerat repudiandae.
							Facere amet, non pariatur qui voluptate, at nam molestiae
							sapiente, ipsa quasi minus est."
							/>
						</GridBlock>
					</GridSection>
				</ContentSection>
				<ContentSection bgColor="grey">
					<GridSection>
						<GridBlock>
							<GridImageBlock imageLink="https://picsum.photos/500/300?image=101" />
						</GridBlock>
						<GridBlock>
							<GridTextBlock
								title="CSS Grid Example Page"
								subtitle="A Content Section"
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
								detai Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								detailsLorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								vitae mollitia odit."
							/>
						</GridBlock>
					</GridSection>
				</ContentSection>
				<ContentSection bgColor="pattern">
					<GridSection>
						<GridBlock>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque culpa quaerat tempora sed. Praesentium, ex officiis voluptates consectetur numquam aperiam consequuntur distinctio eligendi quisquam atque eos voluptatum perferendis reprehenderit"
								link="/"
								thumbnail="https://picsum.photos/500/300?image=210"
							/>
						</GridBlock>
						<GridBlock>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque culpa quaerat tempora sed. Praesentium, ex officiis voluptates consectetur numquam aperiam consequuntur distinctio eligendi quisquam atque eos voluptatum perferendis reprehenderit"
								link="/"
								thumbnail="https://picsum.photos/500/300?image=220"
							/>
						</GridBlock>
						<GridBlock>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque culpa quaerat tempora sed. Praesentium, ex officiis voluptates consectetur numquam aperiam consequuntur distinctio eligendi quisquam atque eos voluptatum perferendis reprehenderit"
								link="/"
								thumbnail="https://picsum.photos/500/300?image=230"
							/>
						</GridBlock>
					</GridSection>
				</ContentSection>
				<ContentSection bgColor="pattern">
					<GridSection>
						<GridBlockLarge>
							<GridVideoBlock
								className="p-5"
								theme="dark"
								caption="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
							recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
							vitae mollitia odit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
							recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
							vitae mollitia odit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
							recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
							vitae mollitia odit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
							recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
							vitae mollitia odit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
							recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
							vitae mollitia odit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
							recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
							vitae mollitia odit."
							/>
						</GridBlockLarge>
						<GridBlockSmall>
							<GridTextBlock
								theme="dark"
								title="CSS Grid Example Page"
								subtitle="A Content Section"
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
								vitae mollitia odit."
							/>
						</GridBlockSmall>
						<GridBlockSmall>
							<GridTextBlock
								theme="dark"
								title="CSS Grid Example Page"
								subtitle="A Content Section"
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
								vitae mollitia odit."
							/>
						</GridBlockSmall>
						<GridBlockSmall>
							<GridTextBlock
								theme="dark"
								title="CSS Grid Example Page"
								subtitle="A Content Section"
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
								vitae mollitia odit."
							/>
						</GridBlockSmall>
						<GridBlockSmall>
							<GridTextBlock
								theme="dark"
								title="CSS Grid Example Page"
								subtitle="A Content Section"
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
								vitae mollitia odit."
							/>
						</GridBlockSmall>
					</GridSection>
				</ContentSection>
				<ContentSection bgColor="light">
					<GridSection>
						<GridBlock>
							<GridVideoBlock
								videoId="rvc5mRATQ7c"
								caption="Image Caption One"
								details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Molestias dolores quia sit harum accusamus quaerat repudiandae.
							Facere amet, non pariatur qui voluptate, at nam molestiae
							sapiente, ipsa quasi minus est."
							/>
						</GridBlock>
						<GridBlock>
							<GridVideoBlock
								videoId="apLevp7QI8E"
								caption="Image Caption Two"
								details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Molestias dolores quia sit harum accusamus quaerat repudiandae.
							Facere amet, non pariatur qui voluptate, at nam molestiae
							sapiente, ipsa quasi minus est."
							/>
						</GridBlock>
						<GridBlock>
							<GridVideoBlock
								videoId="mXjU_Tu4TbI"
								caption="Image Caption Three"
								details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Molestias dolores quia sit harum accusamus quaerat repudiandae.
							Facere amet, non pariatur qui voluptate, at nam molestiae
							sapiente, ipsa quasi minus est."
							/>
						</GridBlock>
					</GridSection>
				</ContentSection>
			</Layout>
		);
	}
}
export default CssGridPage;

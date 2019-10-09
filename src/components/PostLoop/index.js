import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import { Flex } from 'rebass/styled-components'
import nicetime from '../../helpers/nicetime';

import BasicCard from "../../components/Card/BasicCard"
import ProjectCard from "../../components/Card/ProjectCard"
import arrowRight from '../../assets/img/icon-arrow-right.svg';

export default (props) => {
    const links = {
        blog: 'Read post',
        project: 'View project',
    };
    let postLoop;
    const currentDate = new Date();    
    
    if(props.loop !== undefined) {
        postLoop = props.loop.filter(({ node }) => {
                if(props.skip === true) {
                    return props.loop[0].node !== node
                } else {
                    return node;
                }
            }).map(({ node }) => {
                let postDate = new Date(node.frontmatter.date);
                switch(props.type) {
                    case 'blog':
                    case 'blogs':
                        return (
                            <BasicCard width={[1, 1, 1 / 2]} title={node.frontmatter.title} subheader={node.frontmatter.tags} description={node.excerpt} link={node.fields.slug} cols={2} />
                            //                 <span className="date">{ nicetime(currentDate, postDate) }</span>
                        )
                    case 'project':
                    case 'projects':
                        return (
                            <ProjectCard width={[1, 1, 1 / 2]} title={node.frontmatter.title} subheader={node.frontmatter.tags} link={node.fields.slug} cols={2} />
                        )
                    default:
                        return (
                            <BasicCard width={[1, 1, 1 / 2]} title={node.frontmatter.title} subheader={node.frontmatter.tags} description={node.excerpt} link={node.fields.slug} cols={2} />
                        )
                }
            })
        }
    return (
        <Flex flexWrap="wrap">
            { postLoop }
        </Flex>
    );
};
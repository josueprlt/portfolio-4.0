"use client"
import { useState, useEffect, useCallback } from 'react';
import Home from '@/app/components/ui/filterPage/home/page';
import ResearchBar from '@/app/components/ui/filterPage/researchBar/researchBar';
import Tags from '@/app/components/ui/filterPage/tags/tags';
import Categories from '@/app/components/ui/filterPage/categories/categories';
import Filtered from '@/app/components/ui/filterPage/filtered/filtered';
import projectsData from '@/app/data/projects.json';

interface Project {
    id: number; // Assurez-vous que le type correspond à celui dans votre fichier JSON
    title: string;
    date: string;
    category: string[];
    description: string;
    image: string[];
    link: string | null;
    github?: string;
}

export default function Page() {
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData as Project[]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleCategoriesSelected = (categories: string[]) => {
        setSelectedCategories(categories);
    };

    const handleTagRemove = (tag: string) => {
        const newSelectedCategories = selectedCategories.filter(category => category !== tag);
        setSelectedCategories(newSelectedCategories);
    };

    const filterProjects = useCallback(() => {
        let filtered = projectsData as Project[];

        if (searchTerm) {
            filtered = filtered.filter(project =>
                project.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategories.length > 0) {
            filtered = filtered.filter(project =>
                selectedCategories.every(category =>
                    project.category.includes(category)
                )
            );
        }

        setFilteredProjects(filtered);
    }, [searchTerm, selectedCategories]);

    const sortProjectsByDate = (order: 'asc' | 'desc') => {
        const sortedProjects = [...filteredProjects].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return order === 'asc' ? dateA - dateB : dateB - dateA;
        });
        setFilteredProjects(sortedProjects);
    };

    useEffect(() => {
        filterProjects();
    }, [filterProjects]);

    return (
        <>
            <Home />
            <main className='px-4 md:px-8'>
                <div className='md:grid md:gap-9 md:grid-cols-5'>
                    <ResearchBar
                        projects={projectsData as Project[]}
                        placeholder='Recherchez...'
                        onProjectsFiltered={(searchTerm) => setSearchTerm(searchTerm)}
                    />
                    <Tags tags={selectedCategories} onTagRemove={handleTagRemove} />
                </div>
                <Categories
                    selectedCategories={selectedCategories}
                    onCategoriesSelected={handleCategoriesSelected}
                    onSortByDate={sortProjectsByDate}
                />
                <Filtered projects={filteredProjects} />
            </main>
        </>
    );
}
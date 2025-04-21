"use client"
import { useState, useEffect, useCallback } from 'react';
import Home from '@/app/components/ui/filterPage/home/page';
import ResearchBar from '@/app/components/ui/filterPage/researchBar/researchBar';
import Tags from '@/app/components/ui/filterPage/tags/tags';
import Categories from '@/app/components/ui/filterPage/categories/categories';
import Filtered from '@/app/components/ui/filterPage/filtered/filtered';
import projectsData from '@/app/data/projects.json';

interface Project {
    id: number;
    title: string;
    date: string;
    category: string[];
    description: string;
    image: string[];
    link: string | null;
    github?: string;
}

export default function Page() {
    const [language, setLanguage] = useState("fr");
    const [colorMode, setColorMode] = useState("light");
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

    useEffect(() => {
        const savedLanguage = localStorage.getItem("lang") || "fr";
        setLanguage(savedLanguage);

        const savedColorMode = localStorage.getItem("color-mode") || "light";
        setColorMode(savedColorMode);
    }, [colorMode]);

    return (
        <>
            <Home lang={language} colorMode={colorMode} />
            <main className={`px-4 md:px-8 ${colorMode === 'light' && 'bg-background text-foreground'} ${colorMode === 'dark' && 'bg-foreground text-background'}`}>
                <div className='md:grid md:gap-9 md:grid-cols-5'>
                    <ResearchBar
                        lang={language}
                        colorMode={colorMode}
                        projects={projectsData as Project[]}
                        placeholder='Recherchez...'
                        placeholderEn='Search...'
                        onProjectsFiltered={(searchTerm) => setSearchTerm(searchTerm)}
                    />
                    <Tags lang={language} colorMode={colorMode} tags={selectedCategories} onTagRemove={handleTagRemove} />
                </div>
                <Categories
                    lang={language}
                    colorMode={colorMode}
                    selectedCategories={selectedCategories}
                    onCategoriesSelected={handleCategoriesSelected}
                    onSortByDate={sortProjectsByDate}
                />
                <Filtered lang={language} colorMode={colorMode} projects={filteredProjects} />
            </main>
        </>
    );
}
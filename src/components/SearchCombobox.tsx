"use client";
import { FC, useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa6";
import { Combobox } from "@headlessui/react";
import { copy } from "@/copy";

const { search } = copy.home;

const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const SearchCombobox: FC<{
  entries: Array<{ id: number; name: string }>;
}> = ({ entries }) => {
  const [query, setQuery] = useState<string>("");
  const [selectedPerson, setSelectedPerson] = useState<typeof entries>([]);

  const filterEntries = (
    people: typeof entries,
    query: string,
  ): typeof entries =>
    query === ""
      ? people
      : people.filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase()),
        );

  const filteredPeople: typeof entries = filterEntries(entries, query);

  return (
    <Combobox
      as="div"
      value={selectedPerson}
      onChange={setSelectedPerson}
      className="w-full md:w-1/2 mt-6"
    >
      <Combobox.Label className="block text-sm font-medium leading-6 text-secondary-700">
        {search.label}
      </Combobox.Label>
      <div className="relative mt-2">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          placeholder={search.placeholder}
          displayValue={(person: { name: string }) => person?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <FaChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.map((person) => (
              <Combobox.Option
                key={person.id}
                value={person}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-primary-600 text-white" : "text-gray-900",
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected ? "font-semibold" : "",
                      )}
                    >
                      {person.name}
                    </span>
                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-primary-600",
                        )}
                      >
                        <FaCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};
